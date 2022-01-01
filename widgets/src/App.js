import React, {useState} from "react";
import Accordian from "./components/accordian";
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";
import {Route,Routes} from 'react-router-dom';
import Header from "./components/header";


const items = [
  {title: "what is React ?", content: "React is a JS Front-end Library"},
  {title: "why React ?", content: "React is popular library"},
  {title: "How do we use React ?", content: "By using components"},
];

const options = [
  {label: "The Color Red", value: "red"},
  {label: "The Color Green", value: "green"},
  {label: "The Color Blue", value: "blue"},
];

const App = () => {
  const [selection, setSelection] = useState(options[0]);
  return (
    <>
      <Header />
      
      
      <Routes>
      
      <Route path="/" exact element={ <Accordian items={items} />} />
      <Route path="/list" element={<Search/>}/>
       
      <Route path="/dropdown" element={<Dropdown
          selected={selection}
          onSelectedChange={setSelection}
          options={options}
          label="Select a Color"
        />}/>
        
     
      <Route path="/translate" element={<Translate/>}/>
       </Routes>
    </>
  );
};

export default App;
