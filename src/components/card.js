const date= new Date();
const dateName=date.getDate();
const monthName= date.getMonth();
const currentYear= date.getFullYear();


function Card(){
    return <div className= "card">
         <h3 className= "cardtitle"> "Shihab now you are a react developer."</h3>
         <p className= "cardparagraph" >Lorem nonumy sed ea et sed. At gubergren ea et lorem lorem, takimata takimata elitr dolore tempor amet invidunt sit kasd. Gubergren et aliquyam sed eos stet. Eos ipsum gubergren sit sadipscing nonumy ipsum ea diam eirmod, eirmod eirmod clita kasd ipsum rebum no dolore. Lorem diam kasd sit erat sanctus eos est nonumy. Takimata est amet amet sanctus sadipscing.</p>
         <p className= "carddate">{dateName +" " + monthName + " " + currentYear}</p>
      </div>
}
export default Card;