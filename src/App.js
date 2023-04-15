import { useState } from 'react';
import Subject from './Subject';
import './App.css';

function App() {

  let Subjects = [

    {name : 'Mathématiques', coeff : 16, mark : parseInt(localStorage.Mathématiques) || 0},
    {name : 'Physique_chimie', coeff : 16, mark : parseInt(localStorage.Physique_chimie) || 0},
    {name : 'SVT', coeff : 8, mark : parseInt(localStorage.SVT) || 0},
    {name : 'Grand_oral', coeff : 10, mark : parseInt(localStorage.Grand_oral) || 0},
    {name : 'Philosophie', coeff : 8, mark : parseInt(localStorage.Philosophie) || 0},
    {name : 'Français_écrit', coeff : 5, mark : parseInt(localStorage.Français_écrit) || 0},
    {name : 'Français_oral', coeff : 5, mark : parseInt(localStorage.Français_oral) || 0},
    {name : 'EMC', coeff : 2, mark : parseInt(localStorage.EMC) || 0},
    {name : 'EPS', coeff : 6, mark : parseInt(localStorage.EPS) || 0},
    {name : 'Histoire_géographie', coeff : 6, mark : parseInt(localStorage.Histoire_géographie) || 0},
    {name : 'Enseignement_Scientifique', coeff : 6, mark : parseInt(localStorage.Enseignement_Scientifique) || 0},
    {name : 'Anglais', coeff : 6, mark : parseInt(localStorage.Anglais) || 0},
    {name : 'Espagnol', coeff : 6, mark : parseInt(localStorage.Espagnol) || 0}

  ]

  function calcFinalMark() {
    let mark = 0
    Subjects.forEach(item => mark = mark + item.coeff * localStorage.getItem(item.name))
    mark = mark/100
    console.log(mark)
    return mark
  }

  let defaultMarks = {}
  Subjects.map(item => { 
    Object.defineProperty(defaultMarks, item.name, {
      value: item.mark,
      writable: true
    });
  })

  let [finalMark, updateFinalMark] = useState(calcFinalMark)
  let [marks, updateMarks] = useState(defaultMarks)

  function handleChange (e, subject) {
    localStorage.setItem(subject, parseInt(e.target.value) || 0)
    let newMarks = marks
    Object.defineProperty(newMarks, subject, {
      value: parseInt(e.target.value) || 0,
      writable: true
    })
    updateMarks(newMarks)
    updateFinalMark(calcFinalMark())
  }

  return (
    <div id="App">
      <div id='Subjects'>{Subjects.map(item => <Subject handleChange={handleChange} name={item.name} mark={item.mark} coeff={item.coeff}/>)}</div>
      <div id='NoteBac'>Note Final : {finalMark}</div>
    </div>
  );
}

export default App;
