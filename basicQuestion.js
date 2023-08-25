const basicData = [
    {
      question: "In Excel, which function is used to find the highest value in a range of cells?",
      options: ["MAX", "HIGH", "TOP", "HIGHEST"],
      correctAnswer: 0
    },
    {
      question: "Which keyboard shortcut is used to paste special in Excel?",
      options: ["Ctrl + V", "Ctrl + P", "Ctrl + S", "Ctrl + Alt + V"],
      correctAnswer: 3
    },
    {
      question: "What does the SUM function do in Excel?",
      options: ["Multiplies a range of cells", "Subtracts a range of cells", "Divides a range of cells", "Adds a range of cells"],
      correctAnswer: 3
    },
    {
      question: "Which function is used to combine text from two or more cells into one cell in Excel?",
      options: ["JOIN", "CONCATENATE", "COMBINE", "MERGE"],
      correctAnswer: 1
    },
    {
      question: "Which Excel feature is used to filter and sort data in a table?",
      options: ["Formula AutoComplete", "PivotTable", "Data Validation", "Filter and Sort"],
      correctAnswer: 2
    },
    {
      question: "What is the purpose of VLOOKUP function in Excel?",
      options: ["Vertical alignment of text", "Visual presentation of data", "Searching for a value in a table and returning a related value", "Viewing multiple sheets simultaneously"],
      correctAnswer: 2
    },
    {
      question: "Which Excel chart type is used to compare values across different categories?",
      options: ["Line Chart", "Bar Chart", "Pie Chart", "Scatter Plot"],
      correctAnswer: 1
    },
    {
      question: "Which function is used to count the number of cells in a range that meet a specified condition?",
      options: ["COUNT", "SUMIF", "COUNTIF", "AVERAGEIF"],
      correctAnswer: 2
    },
    {
      question: "Which feature is used to group and summarize data based on selected columns in Excel?",
      options: ["Data Sorting", "Group and Outline", "Data Validation", "Conditional Formatting"],
      correctAnswer: 1
    },
    {
      question: "Which Excel tool is used to identify relationships and patterns between variables in large datasets?",
      options: ["Regression analysis", "Scenario Manager", "Goal Seek", "Formula Auditing"],
      correctAnswer: 0
    },
    {
        question: "Which Excel function is used to round a number to a specified number of decimal places?",
        options: ["ROUNDUP", "ROUNDDOWN", "ROUND", "ROUNDTO"],
        correctAnswer: 2
      },
      {
        question: "What does the COUNTA function do in Excel?",
        options: ["Counts the number of empty cells in a range", "Counts the number of cells that contain text", "Counts the number of cells with numerical values", "Counts the total number of cells in a range"],
        correctAnswer: 1
      },
      {
        question: "Which keyboard shortcut is used to insert a new row in Excel?",
        options: ["Ctrl + R", "Ctrl + I", "Ctrl + N", "Ctrl + Shift + +"],
        correctAnswer: 3
      },
      {
        question: "In Excel, which type of reference remains constant when copied to other cells?",
        options: ["Absolute reference", "Relative reference", "Mixed reference", "Dynamic reference"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the IF function in Excel?",
        options: ["Performs mathematical operations", "Converts text to uppercase", "Adds up a range of cells", "Performs conditional testing"],
        correctAnswer: 3
      },
      {
        question: "Which Excel feature allows you to apply formatting based on certain conditions?",
        options: ["Formula AutoComplete", "Conditional Formatting", "Data Validation", "PivotTable"],
        correctAnswer: 1
      },
      {
        question: "Which function is used to calculate the average value of a range of cells in Excel?",
        options: ["AVERAGE", "AVG", "MEAN", "SUM"],
        correctAnswer: 0
      },
      {
        question: "Which Excel tool is used to create a visual representation of data through bars that vary in length?",
        options: ["Line Chart", "Scatter Plot", "Bar Chart", "Pie Chart"],
        correctAnswer: 2
      },
      {
        question: "What does the CONCATENATE function do in Excel?",
        options: ["Calculates the sum of a range of cells", "Combines text from multiple cells into one cell", "Rounds a number to the nearest integer", "Searches for a value in a table and returns a related value"],
        correctAnswer: 1
      },
      {
        question: "Which keyboard shortcut is used to save an Excel workbook?",
        options: ["Ctrl + S", "Ctrl + Shift + S", "Ctrl + W", "Ctrl + C"],
        correctAnswer: 0
      },
      {
        question: "In Excel, which function is used to calculate the future value of an investment?",
        options: ["FV", "PV", "ROI", "NPV"],
        correctAnswer: 0
      },
      {
        question: "What does the TRIM function do in Excel?",
        options: ["Removes leading and trailing spaces from text", "Converts text to uppercase", "Counts the number of characters in a cell", "Rounds a number to a specified number of decimal places"],
        correctAnswer: 0
      },
      {
        question: "Which Excel function is used to find the smallest value in a range of cells?",
        options: ["MIN", "SMALL", "LOW", "SMALLEST"],
        correctAnswer: 0
      },
      {
        question: "What does the TODAY function do in Excel?",
        options: ["Returns the current date and time", "Returns the current date", "Returns the current time", "Returns the current day of the week"],
        correctAnswer: 1
      },
      {
        question: "In Excel, which chart type is used to show the relationship between two variables?",
        options: ["Line Chart", "Scatter Plot", "Bar Chart", "Pie Chart"],
        correctAnswer: 2
      },
      {
        question: "Which function is used to calculate the payment against a loan amount in Excel?",
        options: ["PAYMENT", "AMORTIZE", "INTEREST", "LOAN"],
        correctAnswer: 0
      },
      {
        question: "What does the NOW function do in Excel?",
        options: ["Returns the current date", "Returns the current time", "Returns the current date and time", "Returns the current day of the week"],
        correctAnswer: 2
      },
      {
        question: "Which Excel feature allows you to validate data entered into a cell based on a set of rules?",
        options: ["Formula AutoComplete", "Data Validation", "Conditional Formatting", "Goal Seek"],
        correctAnswer: 1
      },
      {
        question: "Which function is used to calculate the interest rate for a loan in Excel?",
        options: ["RATE", "INTEREST", "LOAN", "PAYMENT"],
        correctAnswer: 0
      },
      {
        question: "In Excel, which function is used to check if a cell contains a specific text or substring?",
        options: ["TEXTCHECK", "STRINGMATCH", "FIND", "SEARCH"],
        correctAnswer: 3
      },
      {
        question: "Which keyboard shortcut is used to save a document in Microsoft Word?",
        options: ["Ctrl + S", "Ctrl + P", "Ctrl + C", "Ctrl + V"],
        correctAnswer: 0
      },
      {
        question: "What is the default file extension for a Microsoft Word document?",
        options: [".docx", ".txt", ".doc", ".xlsx"],
        correctAnswer: 0
      },
      {
        question: "Which option in Microsoft Word allows you to quickly select the entire document?",
        options: ["Select All", "Highlight All", "Choose All", "Pick All"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the 'Undo' command in Microsoft Word?",
        options: ["Redo the last action", "Copy selected text", "Delete the current document", "Reverse the last action"],
        correctAnswer: 3
      },
      {
        question: "Which tab in the Microsoft Word ribbon contains options for formatting text and paragraphs?",
        options: ["File", "Home", "Insert", "View"],
        correctAnswer: 1
      },
      {
        question: "Which feature in Microsoft Word allows you to check the spelling and grammar in a document?",
        options: ["Language Checker", "Grammar Inspector", "Spelling & Grammar", "Proofreading Tool"],
        correctAnswer: 2
      },
      {
        question: "Which command in Microsoft Word is used to align text to both the left and right margins?",
        options: ["Center", "Justify", "Align", "Right Indent"],
        correctAnswer: 1
      },
      {
        question: "What is the function of the 'Bulleted List' button in Microsoft Word?",
        options: ["Creates a numbered list", "Inserts a checkmark symbol", "Indents the text", "Adds bullet points to a list"],
        correctAnswer: 3
      },
      {
        question: "How can you insert a page break in Microsoft Word?",
        options: ["Press Enter", "Press Ctrl + Enter", "Right-click and select 'Break'", "Press Shift + Enter"],
        correctAnswer: 1
      },
      {
        question: "Which ribbon tab in Microsoft Word contains commands related to inserting pictures, shapes, and charts?",
        options: ["File", "Design", "Insert", "Page Layout"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of the 'Find and Replace' feature in Microsoft Word?",
        options: ["To search for a specific font", "To search for and replace text in the document", "To find missing images", "To replace formatting with plain text"],
        correctAnswer: 1
      },
      {
        question: "Which view in Microsoft Word allows you to see how your document will appear when printed?",
        options: ["Draft View", "Print Layout View", "Web Layout View", "Full Screen View"],
        correctAnswer: 1
      },
      {
        question: "What is the shortcut to copy selected text in Microsoft Word?",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + A"],
        correctAnswer: 0
      },
      {
        question: "Which command is used to increase the font size of selected text in Microsoft Word?",
        options: ["Bold", "Underline", "Increase Font", "Italic"],
        correctAnswer: 2
      },
      {
        question: "What does the 'Insert Hyperlink' command in Microsoft Word allow you to do?",
        options: ["Change the font color of text", "Add a background image to a page", "Create a link to a website or file", "Insert a table of contents"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of the 'Thesaurus' tool in Microsoft Word?",
        options: ["To add visual effects to text", "To insert images from the internet", "To check document grammar", "To find synonyms and antonyms"],
        correctAnswer: 3
      },
      {
        question: "Which command is used to apply a different style to selected text in Microsoft Word?",
        options: ["Change Style", "Apply Style", "Modify Style", "Clear Style"],
        correctAnswer: 1
      },
      {
        question: "How can you create a numbered list in Microsoft Word?",
        options: ["Press the Tab key", "Click the Numbered List button", "Press the Enter key", "Press the Shift key"],
        correctAnswer: 1
      },
      {
        question: "What does the 'Show/Hide' button in Microsoft Word allow you to do?",
        options: ["Display the formatting toolbar", "Reveal hidden images in the document", "Show paragraph marks and other hidden formatting symbols", "Show the word count of the document"],
        correctAnswer: 2
      },
      {
        question: "Which command is used to change the page orientation to landscape in Microsoft Word?",
        options: ["Page Layout", "Landscape View", "Page Setup", "Page Orientation"],
        correctAnswer: 2
      },
      {
        question: "What is the shortcut to paste copied text in Microsoft Word?",
        options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + P"],
        correctAnswer: 2
      },
      {
        question: "Which feature in Microsoft Word allows you to create predefined styles for text, headings, and other elements?",
        options: ["Styles Gallery", "Theme Builder", "Font Designer", "Style Organizer"],
        correctAnswer: 0
      },
      {
        question: "Which command is used to make selected text appear in italics in Microsoft Word?",
        options: ["Bold", "Underline", "Italics", "Emphasize"],
        correctAnswer: 2
      },
      {
        question: "How can you apply a border to a paragraph in Microsoft Word?",
        options: ["Use the Border button in the Font group", "Use the Border button in the Paragraph group", "Right-click and select 'Add Border'", "Use the Border button in the Styles group"],
        correctAnswer: 1
      },
      {
        question: "Which view in Microsoft Word displays the document as it would appear in a web browser?",
        options: ["Print Layout View", "Web Layout View", "Draft View", "Outline View"],
        correctAnswer: 1
      },
      {
        question: "What is the purpose of the 'Mail Merge' feature in Microsoft Word?",
        options: ["To send emails directly from Word", "To combine data from a data source with a document", "To create envelopes and labels", "To merge multiple documents into a single file"],
        correctAnswer: 1
      },
      {
        question: "How can you insert a table into a document in Microsoft Word?",
        options: ["Click the 'Insert Table' button on the Home tab", "Press Ctrl + T", "Right-click and select 'Insert Table'", "Press Ctrl + I"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the 'Line Spacing' feature in Microsoft Word?",
        options: ["To add vertical lines between paragraphs", "To control the amount of space between lines of text", "To insert decorative lines around text", "To adjust the margins of the page"],
        correctAnswer: 1
      },
      {
        question: "Which ribbon tab in Microsoft Word contains options for adjusting page margins and orientation?",
        options: ["Insert", "View", "Page Layout", "References"],
        correctAnswer: 2
      },
      {
        question: "How can you create a new paragraph in Microsoft Word?",
        options: ["Press the Spacebar twice", "Press the Enter key", "Press the Tab key", "Press the Shift key"],
        correctAnswer: 1
      },
      {
        question: "What is Microsoft Access primarily used for?",
        options: ["Creating presentations", "Designing websites", "Managing databases", "Writing code"],
        correctAnswer: 2
      },
      {
        question: "In Microsoft Access, what is a primary key?",
        options: ["The first field in a table", "A key used for encryption", "A unique identifier for a record", "A password for accessing the database"],
        correctAnswer: 2
      },
      {
        question: "Which term refers to a collection of related data organized in tables in Microsoft Access?",
        options: ["Worksheets", "Records", "Spreadsheets", "Databases"],
        correctAnswer: 3
      },
      {
        question: "What is the purpose of a query in Microsoft Access?",
        options: ["To create forms", "To design reports", "To retrieve and manipulate data", "To organize macros"],
        correctAnswer: 2
      },
      {
        question: "Which object in Microsoft Access is used to present data in a printable format?",
        options: ["Form", "Table", "Report", "Query"],
        correctAnswer: 2
      },
      {
        question: "What does SQL stand for in the context of Microsoft Access?",
        options: ["Structured Query Language", "Simple Query Logic", "Systematic Query Link", "Structured Query Logic"],
        correctAnswer: 0
      },
      {
        question: "In Microsoft Access, what is the purpose of a relationship between tables?",
        options: ["To link records together", "To sort data alphabetically", "To create a backup copy of a table", "To group data by category"],
        correctAnswer: 0
      },
      {
        question: "Which view in Microsoft Access allows you to design and modify the structure of a table?",
        options: ["Datasheet View", "Query View", "Design View", "Form View"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of a form in Microsoft Access?",
        options: ["To store data", "To create calculations", "To provide a user-friendly interface for data entry", "To generate reports"],
        correctAnswer: 1
      },
      {
        question: "Which function is used to find the highest value in a field in Microsoft Access?",
        options: ["HIGH", "MAX", "HIGHEST", "TOP"],
        correctAnswer: 1
      },
      {
        question: "In Microsoft PowerPoint, what is a slide master used for?",
        options: ["Adding animations to slides", "Designing individual slides", "Setting slide transitions", "Creating a consistent layout and design for all slides"],
        correctAnswer: 3
      },
      {
        question: "Which view in Microsoft PowerPoint allows you to see all the slides in your presentation as thumbnails?",
        options: ["Slide Sorter", "Slide Master", "Normal View", "Outline View"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of 'Slide Transition' in Microsoft PowerPoint?",
        options: ["To move from one slide to the next during a presentation", "To arrange slides in a specific order", "To insert images and videos on slides", "To apply animations to objects on a slide"],
        correctAnswer: 0
      },
      {
        question: "Which option allows you to print multiple slides on a single page in Microsoft PowerPoint?",
        options: ["Handouts", "Slide Sorter", "Print Layout", "Notes Pages"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of 'Animation' in Microsoft PowerPoint?",
        options: ["To apply transitions between slides", "To add images to a slide", "To create interactive elements", "To control the entrance and exit of slide elements"],
        correctAnswer: 3
      },
      {
        question: "In Microsoft PowerPoint, what is the 'Presenter View' used for?",
        options: ["Editing slides", "Designing layouts", "Viewing slide thumbnails", "Giving a presentation with speaker notes and tools"],
        correctAnswer: 3
      },
      {
        question: "Which tab in Microsoft PowerPoint contains options for inserting images, shapes, and multimedia?",
        options: ["Home", "Insert", "Design", "Animations"],
        correctAnswer: 1
      },
      {
        question: "What does the 'Slide Layout' feature in Microsoft PowerPoint allow you to do?",
        options: ["Change the order of slides", "Adjust slide dimensions", "Customize the arrangement of placeholders on a slide", "Apply animations to slide transitions"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of 'Notes Pages' in Microsoft PowerPoint?",
        options: ["To create speaker notes for a presentation", "To add extra space for images on slides", "To insert hyperlinks", "To create a title slide"],
        correctAnswer: 0
      },
      {
        question: "Which view in Microsoft PowerPoint allows you to focus on designing the content of an individual slide?",
        options: ["Slide Sorter", "Normal View", "Slide Master", "Outline View"],
        correctAnswer: 1
      },
      {
        question: "What is the primary purpose of a computer's CPU?",
        options: ["Display images on the screen", "Store data and files", "Execute instructions and perform calculations", "Connect to the internet"],
        correctAnswer: 1
      },
      {
        question: "Which computer component is responsible for temporarily storing data that is being actively used by the CPU?",
        options: ["Hard Drive", "RAM (Random Access Memory)", "CPU Cache", "Optical Drive"],
        correctAnswer: 1
      },
      {
        question: "What does the acronym 'GUI' stand for in the context of computing?",
        options: ["General Unifying Interface", "Graphic User Interface", "General User Integration", "Grouped User Interactions"],
        correctAnswer: 1
      },
      {
        question: "Which computer input device is used to enter text and numbers into a computer?",
        options: ["Monitor", "Printer", "Keyboard", "Mouse"],
        correctAnswer: 2
      },
      {
        question: "What does 'HDD' stand for in computer terminology?",
        options: ["Hard Disk Drive", "High Definition Display", "Hardware Design Division", "Hyper Data Delivery"],
        correctAnswer: 0
      },
      {
        question: "What is the role of an operating system in a computer?",
        options: ["To process data", "To display images", "To perform calculations", "To manage hardware and software resources"],
        correctAnswer: 3
      },
      {
        question: "Which computer component is often referred to as the 'brain' of the computer?",
        options: ["Monitor", "Keyboard", "CPU (Central Processing Unit)", "Printer"],
        correctAnswer: 1
      },
      {
        question: "What is the purpose of a computer's motherboard?",
        options: ["To provide power to the computer", "To display graphics on the screen", "To hold the computer's memory", "To connect and communicate between hardware components"],
        correctAnswer: 3
      },
      {
        question: "What is the smallest unit of digital information that a computer can understand?",
        options: ["Byte", "Kilobyte", "Bit", "Megabyte"],
        correctAnswer: 2
      },
      {
        question: "What does the term 'Binary' refer to in computing?",
        options: ["A computer virus", "A number system with two digits: 0 and 1", "A type of computer hardware", "An operating system"],
        correctAnswer: 1
      },
      {
        question: "What does 'HTML' refer to in computing?",
        options: ["Hyperlink and Text Markup Language", "High Transfer Markup Language", "Hyper Text Modulation Language", "Hyper Text Markup Language"],
        correctAnswer: 3
      },
      {
        question: "What is the full form of 'LAN'?",
        options: ["Large Array Network", "Local Area Network", "Long Access Network", "Local Array Network"],
        correctAnswer: 1
      },
      {
        question: "What does 'DVD' stand for?",
        options: ["Digital Video Disc", "Dynamic Versatile Disc", "Digital Versatile Disc", "Dynamic Video Disc"],
        correctAnswer: 2
      },
      {
        question: "What is the full form of 'HTTP'?",
        options: ["Hyper Text Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol", "Hyperlink and Text Transfer Protocol"],
        correctAnswer: 0
      },
      {
        question: "What does 'ISP' stand for?",
        options: ["Internet Service Provider", "Internet Support Provider", "International System Provider", "Internet System Provider"],
        correctAnswer: 0
      },
      {
        question: "What is the full form of 'PDF'?",
        options: ["Portable Document Form", "Printable Document Format", "Portable Document Format", "Primary Document File"],
        correctAnswer: 2
      },
      {
        question: "What does 'GUI' stand for?",
        options: ["General User Interface", "Graphic Universal Interface", "General Unifying Interface", "Graphical User Interface"],
        correctAnswer: 3
      },
      {
        question: "What is the full form of 'USB'?",
        options: ["Ultra Speed Bus", "Universal Serial Bus", "Unified Serial Bus", "Universal Speed Bus"],
        correctAnswer: 1
      },
      {
        question: "What does 'WWW' stand for?",
        options: ["Wide Website World", "Web Wide World", "World Wide Web", "World Web Wide"],
        correctAnswer: 2
      },
      {
        question: "What is the full form of 'BIOS' in computing?",
        options: ["Binary Input Output Service", "Basic Input Output System", "Binary Input Output System", "Basic Input Output Service"],
        correctAnswer: 1
      }
  ];
  module.exports=basicData;