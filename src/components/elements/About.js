import React, { PureComponent } from "react";

class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contactInfos: {
        address: "345 Villeray street, Montreal, Québec H2R 1G8",
        codePostal: "514-439-9089",
        businessHours: {
          Tuesday: "17:30	23:00",
          Wednesday: "17:30	23:00",
          Thursday: "17:30	23:00",
          Friday: "17:30	23:00",
          Saturday: "10:00	14:30,17:00	23:00",
          Sunday: "10:00	14:30"
        },
        directions:
          "Service de Coffe est disponible toujours et offert par :Coffee Groupe."
      }
    };
  }
  render() {
    return (
      <div id="About" class="ContactWrp">
        <div class="half left contact-info">
          <div class="small-title">Address</div>
          <p>
            {this.state.contactInfos["address"]}
            <strong>{this.state.contactInfos["codePostal"]}</strong>
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
                <td class="business_hours_table_open">
                  {this.state.contactInfos["businessHours"]["Tuesday"]}
                </td>
                <td class="business_hours_table_close">
                  {this.state.contactInfos["businessHours"]["Tuesday"]}
                </td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Wednesday</td>
                <td class="business_hours_table_open">
                  {this.state.contactInfos["businessHours"]["Wednesday"]}
                </td>
                <td class="business_hours_table_close">
                  {this.state.contactInfos["businessHours"]["Wednesday"]}
                </td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Thursday</td>
                <td class="business_hours_table_open">
                  17:30 {this.state.contactInfos["businessHours"]["Thursday"]}
                </td>
                <td class="business_hours_table_close">
                  23:00 {this.state.contactInfos["businessHours"]["Thursday"]}
                </td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Friday </td>
                <td class="business_hours_table_open">
                  17:30 {this.state.contactInfos["businessHours"]["Friday"]}
                </td>
                <td class="business_hours_table_close">
                  23:00 {this.state.contactInfos["businessHours"]["Friday"]}
                </td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Saturday </td>
                <td class="business_hours_table_open">
                  10:00 {this.state.contactInfos["businessHours"]["Saturday"]}
                </td>
                <td class="business_hours_table_close">
                  14:30 (brunch)
                  {this.state.contactInfos["businessHours"]["Saturday"]}
                </td>
              </tr>

              <tr>
                <td class="business_hours_table_day"> Saturday</td>
                <td class="business_hours_table_open">
                  17:00 {this.state.contactInfos["businessHours"]["Saturday"]}
                </td>
                <td class="business_hours_table_close">
                  23:00 {this.state.contactInfos["businessHours"]["Saturday"]}
                </td>
              </tr>

              <tr>
                <td class="business_hours_table_day">Sunday </td>
                <td class="business_hours_table_open">
                  10:00 {this.state.contactInfos["businessHours"]["Sunday"]}
                </td>
                <td class="business_hours_table_close">
                  14:30 (brunch){" "}
                  {this.state.contactInfos["businessHours"]["Sunday"]}
                </td>
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
          <h1 style={{ fontSize: "2.5vmin", marginBottom: "20px" }}>
            Service de Coffe est disponible toujours et offert par :
            <strong>Coffee Groupe</strong>.
          </h1>
        </div>
      </div>
    );
  }
}

export default Contact;
