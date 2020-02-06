import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

import amandaLandry from "../../img/amanda-landry-1.jpg";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="bg-warm-grey-050 pt-10">
          <div className="flex flex-col items-center">
            <h1 className="font-thin text-warm-grey-900 text-2xl sm:text-4xl">
              Contact
            </h1>

            <div className="flex flex-col sm:flex-row bg-white max-w-xm sm:max-w-sm border-t-2 sm:border-l-2 sm:border-t-0 border-cyan-300 shadow-xl p-4 mt-10">
              <img
                src={amandaLandry}
                className="h-32 w-32 rounded-full shadow-inner"
                alt="Amanda Landry"
                title="Amanda Landry"
              />
              <div className="flex flex-col justify-center sm:items-start items-center font-thin text-warm-grey-900 py-4 sm:px-4">
                <div className="text-xl">Amanda Landry</div>
                <div>111.111.1111</div>
                <div>Email Me</div>
              </div>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm px-4 pb-16 mt-10">
              <form
                className="bg-white border-t-2 border-cyan-300 shadow-xl px-8 pt-6 pb-8"
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="bg-warm-grey-050 active:bg-warm-grey-100 text-warm-grey-900 w-full px-3 py-2 placeholder-warm-grey-900 font-thin leading-tight focus:outline-none mt-2"
                      type={"text"}
                      name={"firstName"}
                      onChange={this.handleChange}
                      id={"firstName"}
                      required={true}
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="field mt-6">
                  <div className="control">
                    <input
                      className="bg-warm-grey-050 active:bg-warm-grey-100 text-warm-grey-900 w-full px-3 py-2 placeholder-warm-grey-900 font-thin leading-tight focus:outline-none mt-2"
                      type={"text"}
                      name={"lastName"}
                      onChange={this.handleChange}
                      id={"lastName"}
                      required={true}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="field mt-6">
                  <div className="control">
                    <input
                      className="bg-warm-grey-050 active:bg-warm-grey-100 text-warm-grey-900 w-full px-3 py-2 placeholder-warm-grey-900 font-thin leading-tight focus:outline-none mt-2"
                      type={"text"}
                      name={"phone"}
                      onChange={this.handleChange}
                      id={"phone"}
                      required={true}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="field mt-6">
                  <div className="control">
                    <input
                      className="bg-warm-grey-050 active:bg-warm-grey-100 text-warm-grey-900 w-full px-3 py-2 placeholder-warm-grey-900 font-thin leading-tight focus:outline-none mt-2"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="field mt-6">
                  <div className="control">
                    <textarea
                      className="bg-warm-grey-050 active:bg-warm-grey-100 text-warm-grey-900 w-full px-3 py-2 placeholder-warm-grey-900 font-thin leading-tight focus:outline-none mt-2"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                      placeholder="Message"
                      rows="5"
                    />
                  </div>
                </div>
                <div className="field flex justify-center items-center">
                  <button
                    className="font-semibold text-gray-100 sm:text-lg bg-cyan-500 px-4 py-2 sm:px-5 sm:py-3 mt-10 hover:bg-cyan-600 focus:bg-cyan-600"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
