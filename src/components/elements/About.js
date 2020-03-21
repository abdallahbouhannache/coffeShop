import React, { PureComponent } from "react";

class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="ContactWrp">
        <div class="half left contact-info">
          <div class="small-title">Address</div>
          <p>
            345 Villeray street, Montreal, Québec H2R 1G8
            <strong>514-439-9089</strong>
          </p>
          <div class="small-title">Business Hours</div>
          <table class="business-hours" width="100%">
            <tbody>
              <tr>
                <td class="business_hours_table_day">Monday</td>
                <td
                  class="business_hours_table_closed"
                  colspan="2"
                  align="center"
                >
                  Closed
                </td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Tuesday</td>
                <td class="business_hours_table_open">17:30</td>
                <td class="business_hours_table_close">23:00</td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Wednesday</td>
                <td class="business_hours_table_open">17:30</td>
                <td class="business_hours_table_close">23:00</td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Thursday</td>
                <td class="business_hours_table_open">17:30</td>
                <td class="business_hours_table_close">23:00</td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Friday</td>
                <td class="business_hours_table_open">17:30</td>
                <td class="business_hours_table_close">23:00</td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Saturday</td>
                <td class="business_hours_table_open">10:00</td>
                <td class="business_hours_table_close">14:30 (brunch) </td>
              </tr>

              <tr>
                <td class="business_hours_table_day"></td>
                <td class="business_hours_table_open">17:00</td>
                <td class="business_hours_table_close">23:00</td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Sunday</td>
                <td class="business_hours_table_open">10:00</td>
                <td class="business_hours_table_close">14:30 (brunch)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="half right">
          <h3 class="small-title">Directions</h3>
          <h1 style={{ marginBottom: "20px" }}>
            <img
              src={require("../../assets/map.png")}
              width="441"
              height="300"
              alt="Map"
            />
          </h1>
          <h1>
            Service de Coffe est disponible toujours et offert par :
            <strong>Coffee Groupe</strong>.
          </h1>
        </div>
      </div>
    );
  }
}

export default Contact;
