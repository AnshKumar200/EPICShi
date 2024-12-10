import woman from '../Images/Woman in a Field.jpg'

export default function Card() {
    return (
        <div>
            <div class="heading">
                Empowering <div class="farmer-text">Farmers</div> with Tools and Resources
            </div>

            <div class="below-heading">
                <div class="this-thing">This thing</div>
                <div>world</div>
            </div>

            <img class="img-woman" src={woman}/>

            <div class="container">
                <ul id="cards">
                    <li class="card" id="card1">
                        <div class="card-body">
                            <h2>Card 1</h2>
                        </div>
                    </li>
                    <li class="card" id="card2">
                        <div class="card-body">
                            <h2>Card 2</h2>
                        </div>
                    </li>
                    <li class="card" id="card3">
                        <div class="card-body">
                            <h2>Card 3</h2>
                        </div>
                    </li>
                    <li class="card" id="card4">
                        <div class="card-body">
                            <h2>Card 4</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}