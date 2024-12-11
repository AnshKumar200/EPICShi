import woman from '../Images/Woman in a Field.jpg'
import field from '../Images/field.png'

export default function Card() {
    return (
        <div>
            <div class="container">
                <ul id="cards">
                    <li class="static-card">
                        <div class="img-body">
                            <img class="img-woman" src={woman}/>
                        </div>
                    </li>
                    <li class="static-card" id="our-vision">
                        <div class="bullet-heading">Our Vision</div>
                        <div class="our-vision-body">
                            Empowering farmers with reliable, actionable insights on soil health, crop selection, and sustainable practices through a simple, multilingual platform. Bridging technology and grassroots farming, we aim to enhance productivity, livelihoods, and resilience in agriculture with innovation and inclusivity.
                        </div>
                        <div class="bullet-heading">Research & Technology</div>
                    </li>

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
                    <li class="static-card">
                        <div class="img-body">
                            <img class="img-woman" src={field}/>
                        </div>
                    </li>
                    <li class="static-card" id="our-vision">
                        <div class="bullet-heading-value"> <p>Our Values</p></div>
                        <div class="our-value-body">
                            <p>We empower farmers with simple, reliable tools for informed decisions on soil health, crops, and sustainable farming. With multilingual support, offline access, and innovative resources, we aim to enhance productivity and resilience in agriculture. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>        
    );
}