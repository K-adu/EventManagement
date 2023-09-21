import DiaryCard from '../../components/DiaryCard/DiaryCard';
import { fetchDiary } from '../../services/events/getDiary';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addDiary } from '../../redux/diaryInfoSlice';
import './displaydiary.css';
export default function DisplayDiary() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const renderValue = useSelector((state) => state.counter.render);
  useEffect(() => {
    async function fetchAndSetDiary() {
      try {
        const response = await fetchDiary();
        if (response) {
          await dispatch(addDiary(response));
        }
      } catch (error) {
        console.error('Error fetching diaries:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAndSetDiary();
  }, [dispatch, renderValue]);
  let diaryInfo = useSelector((state) => state.diaryInfo);

  return (
    <>
      <div className="diary-card-container">
        {diaryInfo.map((diary) => (
          <DiaryCard key={diary._id} diary={[diary]} />
        ))}
      </div>
    </>
  );
}
