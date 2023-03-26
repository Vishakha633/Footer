import React from "react";
// import ReactDOM from 'react-dom';
// import { SocialIcon } from 'react-social-icons';
// import { fatwitter, faPinterest, faFacebook, faDribbble } from 'react-icons/fa'
import { BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
// ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body);

const Services = () => {
    let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
    return (
        <>
            <section class="section-white">

                <div class="container">

                    <div class="row">

                        <div class="col-md-12 text-center">

                            <h2 class="section-title">The Team Behind Pacifico</h2>

                            <p class="section-subtitle">{message}</p>

                        </div>

                        <div class="col-sm-3 col-md-3">

                            <div class="team-item">

                                <img src="Mohak4.jpg" class="team-img" alt="pic" />
                                <h3>MOHAK BANSAL</h3>
                                <div class="team-info"><p>Head of SEO</p></div>
                                <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>

                                <ul class="team-icon">
                                    <li>
                                        <a href="/" class="twitter">< BsTwitter /></a>
                                    </li>


                                    <li>
                                        <a href="https://github.com/Jaihanuman64" class="github">< FaGithub /></a>
                                    </li>

                                    <li>
                                        <a href="https://www.linkedin.com/in/mohakbansal6401/ " class="linkedin"><BsLinkedin /></a>
                                    </li>

                                    <li><a href="https://www.instagram.com/mohak.64/" class="insta"><BsInstagram /></a>
                                    </li>

                                </ul>


                            </div>
                        </div>

                        <div class="col-sm-3 col-md-3">

                            <div class="team-item">

                                <img src="Manisha.jpg" class="team-img" alt="pic" />

                                <h3>MANISHA TAK</h3>

                                <div class="team-info"><p>SEO Specialist</p></div>

                                <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>

                                <ul class="team-icon">

                                <li>
                                        <a href="/" class="twitter">< BsTwitter /></a>
                                    </li>


                                    <li>
                                        <a href="/" class="github">< FaGithub /></a>
                                    </li>

                                    <li>
                                        <a href="/" class="linkedin"><BsLinkedin /></a>
                                    </li>

                                    <li><a href="/" class="insta"><BsInstagram /></a>
                                    </li>

                                </ul>

                            </div>

                        </div>
                        <div class="col-sm-3 col-md-3">

                            <div class="team-item">

                                <img src="Vishakha1.jpg" class="team-img" alt="pic" />

                                <h3>VISHAKHA KANSARA</h3>

                                <div class="team-info"><p>Marketing Manager</p></div>

                                <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>

                                <ul class="team-icon">

                                <li>
                                        <a href="https://twitter.com/vi_shakha633?t=mpC0K6ruTZRua9KSBtXBqQ&s=09" class="twitter">< BsTwitter /></a>
                                    </li>


                                    <li>
                                        <a href="https://github.com/Vishakha633" class="github">< FaGithub /></a>
                                    </li>

                                    <li>
                                        <a href="https://www.linkedin.com/in/vishakha-kansara-570321207" class="linkedin"><BsLinkedin /></a>
                                    </li>

                                    <li><a href="https://www.instagram.com/vi.shakha686/" class="insta"><BsInstagram /></a>
                                    </li>

                                </ul>

                            </div>

                        </div>
                        <div class="col-sm-3 col-md-3">

                            <div class="team-item">

                                <img src="Khushi.jpg" class="team-img" alt="pic" />

                                <h3>KHUSHI PUROHIT</h3>

                                <div class="team-info"><p>Marketing Manager</p></div>

                                <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>

                                <ul class="team-icon">

                                <li>
                                        <a href="https://twitter.com/KhushiP37943569?t=2F-vMhGf-snNgqMePy3TDw&s=09" class="twitter">< BsTwitter /></a>
                                    </li>


                                    <li>
                                        <a href="https://github.com/Khushipurohit" class="github">< FaGithub /></a>
                                    </li>

                                    <li>
                                        <a href="https://www.linkedin.com/in/khushi-purohit-a3739a201" class="linkedin"><BsLinkedin /></a>
                                    </li>

                                    <li><a href="https://instagram.com/khushi_purohit._?igshid=ZDdkNTZiNTM=" class="insta"><BsInstagram /></a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Services;
