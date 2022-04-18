const date= new Date();
const dateName=date.getDate();
const monthName= date.getMonth();
const currentYear= date.getFullYear();


// function Card(props){

//     const{titleText,descText}=props;

//     return <div className= "card">
//          <h3 className= "cardtitle"> {titleText}</h3>
//          <p className= "cardparagraph" >{descText}</p>
//          <p className= "carddate">{dateName +" " + monthName + " " + currentYear}</p>
//       </div>
// }

function Card(props){

    const{titleText,descText}=props;

    return <div className= "card">
         <h3 className= "cardtitle"> {titleText}</h3>
         <p className= "cardparagraph" >{descText}</p>
         <p className= "carddate">{dateName +" " + monthName + " " + currentYear}</p>
      </div>
}
export default Card;