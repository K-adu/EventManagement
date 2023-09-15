import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@mui/material';
import { createDiary } from '../../services/events/createDiary';
export default function CreateDiary() {
  const editorRef = useRef(null);
  const log = async () => {
    if (editorRef.current) {
      const htmlContent = editorRef.current.getContent();
      console.log(htmlContent);
      await createDiary(htmlContent);
    }
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <Button variant="contained" onClick={log} style={{ width: '100%' }}>
        Add
      </Button>
    </>
  );
}
