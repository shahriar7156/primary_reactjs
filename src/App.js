
import './App.css';
import Card from './components/card';
import Data from './data.json';

// function App() {
//   return (
//     <div className="App">
//     <div>
//     <h1 className='headingStyle'>"Hello welcome shihab"</h1>
//     <Card titleText="Ipsum ea clita rebum dolores gubergren et at tempor, voluptua." descText="Sed sadipscing diam labore et." />
//     <Card titleText="Lorem amet consetetur et amet sadipscing ipsum, sit ipsum et." descText="Sed magna accusam sed at." />
//     <Card titleText="Dolor consetetur et eirmod nonumy diam erat no consetetur amet." descText= "Diam voluptua ut justo sed." />
//     <Card />
      
//   </div>
//     </div>
//   );
// }

function App() {

  //console.log(Data.title )
  return (
    <div className="App">
    <div>
    <h1 className='headingStyle'>"Hello welcome shihab"</h1>


    

    <Card titleText={Data[0].title} descText={Data[0].title} />
    <Card titleText={Data[1].title} descText={Data[1].title} />
    <Card titleText={Data[2].title} descText={Data[3].title} />
    <Card titleText={Data[3].title} descText={Data[3].title} />
   

    
      
  
  </div>
    </div>
  );
}

// <Card titleText="my name is shihab" descText="my second name is kabir"/>
// <Card titleText="my name is shihab" descText="my second name is kabir"/>
// <Card titleText="my name is shihab" descText="my second name is kabir"/>
//evabe likha jay , //upore array diye data load kore shikhcho 

export default App;
