import './App.css';
import MainInfo from './MainInfo'
import Experience from './Experience'
import Knowledge from './Knowledge'
import Links from './Links'

 function App() {
   const Name = "Ksenia Serdiuk";
   const Age = 21;
   let experience=["Year work with C/C++","Year work with C#"];
   let knowledge = [
    "C/C++",
    "C#",
    "HTML",
    "CSS",
    "PHP",
    "JavaScript",
    'Python'
  ]
  let education = [
    "Completed secondary education",
    'Completed higher education in the specialty "Automation and Computer Integrated Technologies"'
  ]
  let links = [{
    title: 'Github',
    link: 'https://github.com/kseniaxen'
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/ksenia.xen/'
  },
  {
    title: 'Science work',
    link: 'http://ceur-ws.org/Vol-2608/paper9.pdf'
  }
]
   return (
     <div>
      <MainInfo name={Name} age = {Age}/>
      <Experience experMassive = {experience}/>
      <Knowledge know = {knowledge} ed = {education}/>
      <Links links = {links}/>
     </div>
   );
 }

export default App;
