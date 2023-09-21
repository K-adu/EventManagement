import axios from 'axios';
export async function createEvent(data) {
  try {
    const dummyData = [
  {
    "title": "Task 1",
    "description": "Fix bug in code",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Meeting",
    "description": "Discuss project updates",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Research",
    "description": "Analyze market data",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Report",
    "description": "Compile sales data",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Presentation",
    "description": "Create slides for meeting",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Task 2",
    "description": "Write documentation",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Design",
    "description": "Sketch new UI elements",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Code review",
    "description": "Review recent code changes",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Testing",
    "description": "Test application functionality",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Task 3",
    "description": "Update website content",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Training",
    "description": "Provide onboarding session",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Analysis",
    "description": "Evaluate user feedback",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Meeting",
    "description": "Discuss project status",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Report",
    "description": "Generate quarterly report",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Coding",
    "description": "Write new features",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Task 4",
    "description": "Fix server issue",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Presentation",
    "description": "Prepare slides for conference",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Research",
    "description": "Gather market insights",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Meeting",
    "description": "Plan next sprint",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Code review",
    "description": "Review pull requests",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Testing",
    "description": "Verify software stability",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Task 5",
    "description": "Implement new feature",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Design",
    "description": "Create wireframes",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Task 6",
    "description": "Update database schema",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Report",
    "description": "Analyze financial data",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Coding",
    "description": "Refactor codebase",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Meeting",
    "description": "Discuss project roadmap",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Task 7",
    "description": "Optimize server performance",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Training",
    "description": "Train new team members",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Analysis",
    "description": "Review user analytics",
    "priority": "Low",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Meeting",
    "description": "Discuss project goals",
    "priority": "High",
    "postedBy": "65082196a6090d69a734b211"
  },
  {
    "title": "Report",
    "description": "Prepare marketing report",
    "priority": "Medium",
    "postedBy": "65082196a6090d69a734b211"
  },
]
    await axios.post('http://localhost:4000/events/create', dummyData, {
      withCredentials: true,
    });

  } catch (error) {
    console.log(error)
  }
}