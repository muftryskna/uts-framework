import React, { Component } from "react";
import "../style/landingpage.css";
import "../assets/images/bg/bg.png"

export class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="about" id="about">
          <section className="about-us">
            <h1>About <br/> MUFILMS</h1>
            <p>
                Ini merupakan laman yang di desain untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Framework Programming.
                Desain ini menggunakan tema Cinema yang mana user dapat melihat list film yang sedang trending saat ini.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
