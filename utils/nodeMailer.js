import nodemailer from "nodemailer";
var admin_email = process.env.ADMIN_MAIL;
var password = process.env.ADMIN_MAIL_PASSWORD;

// export const mailRegister = (name, email, otp) => {
export const mailRegister = (name, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: admin_email,
      pass: password,
    },
  });

  const mailOptions = {
    from: admin_email,
    to: email,
    subject: "User Registration",
    html: `<!DOCTYPE html>

    <html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:PixelsPerInch>96</o:PixelsPerInch
              ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Abril+Fatface"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Bitter"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Permanent+Marker"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cabin"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oxygen"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Droid+Serif"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Shrikhand"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
    
          @media (max-width: 700px) {
            .desktop_hide table.icons-inner {
              display: inline-block !important;
            }
    
            .icons-inner {
              text-align: center;
            }
    
            .icons-inner td {
              margin: 0 auto;
            }
    
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
    
            .mobile_hide {
              display: none;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
    
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
    
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #eef6f9;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #eef6f9;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #171817;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 10px;
                                  padding-bottom: 10px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="text-align: center; width: 100%">
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #c9dae2;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 16px;
                                          font-weight: 400;
                                          letter-spacing: normal;
                                          line-height: 150%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >Welcome, ${name}</span
                                        >
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-3"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div align="center" style="line-height: 10px">
                                        <img
                                          alt="Banner"
                                          class="big"
                                          src="https://ik.imagekit.io/q4f02hrey/GraceLandBanner.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671610505334"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 680px;
                                            max-width: 100%;
                                          "
                                          title="Banner"
                                          width="680"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
          <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="row row-2"
          role="presentation"
          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
          width="100%"
          >
          <tbody>
            <tr>
            <td>
              <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row-content stack"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #031d4b;
                color: #ffffff;
                width: 680px;
              "
              width="680"
              >
              <tbody>
                <tr>
                <td
                  class="column column-1"
                  style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  font-weight: 400;
                  text-align: left;
                  vertical-align: top;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  border-top: 0px;
                  border-right: 0px;
                  border-bottom: 0px;
                  border-left: 0px;
                  "
                  width="100%"
                >
                  <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="image_block"
                  role="presentation"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                  "
                  width="100%"
                  >
                  <tr>
                    <td
                    style="
                      padding-bottom: 20px;
                      padding-left: 30px;
                      padding-right: 30px;
                      padding-top: 45px;
                      width: 100%;
                    "
                    >
                    <div align="center" style="line-height: 10px">
                      <!-- <img
                      alt="Logo"
                      src="images/fathers-day.png"
                      style="
                        display: block;
                        height: auto;
                        border: 0;
                        width: 272px;
                        max-width: 100%;
                      "
                      title="Logo"
                      width="272"
                      /> -->
                      <p>You have successfully created an account in Graceland Journal App.</p>
                      <p style="font-weight: bolder;letter-spacing: .7rem;background-color: #8080803b; padding: 1rem;"></p>
                    </div>
                    </td>
                  </tr>
                  </table>
                </td>
                </tr>
              </tbody>
              </table>
            </td>
            </tr>
          </tbody>
          </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-4"
                  role="presentation"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    background-size: auto;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-size: auto;
                            background-color: #ffffff;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 30px;
                                  padding-right: 30px;
                                  padding-top: 30px;
                                  padding-bottom: 30px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 30px;
                                        padding-left: 30px;
                                        padding-right: 30px;
                                        padding-top: 60px;
                                        text-align: center;
                                        width: 100%;
                                      "
                                    >
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #171817;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 18px;
                                          font-weight: 400;
                                          letter-spacing: 4px;
                                          line-height: 150%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >THE ESSENTIALS</span
                                        >
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            font-family: Poppins, Arial, Helvetica,
                                              sans-serif;
                                            mso-line-height-alt: 18px;
                                            color: #1d1d1b;
                                            line-height: 1.5;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <span style="font-size: 16px"
                                              >Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed do
                                              eiusmod tempor incididunt ut labore et
                                              dolore magna aliqua.</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-5"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #1c1c1c;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 15px;
                                  padding-bottom: 15px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <h3
                                        style="
                                          margin: 0;
                                          color: #ffffff;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 20px;
                                          font-weight: 400;
                                          letter-spacing: normal;
                                          line-height: 120%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >#Graceland Journals</span
                                        >
                                      </h3>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 30px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 10px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="social-table"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="108px"
                                      >
                                        <tr>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.facebook.com/"
                                              target="_blank"
                                              ><img
                                                alt="Facebook"
                                                height="32"
                                                src="https://www.freeiconspng.com/uploads/images-facebook-f-logo-png-transparent-background-page-2-29.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="facebook"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.linkedin.com/"
                                              target="_blank"
                                              ><img
                                                alt="Linkedin"
                                                height="32"
                                                src="https://www.freeiconspng.com/uploads/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="linkedin"
                                                width="32"
                                            /></a>
                                          </td>

                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #393d47;
                                            line-height: 1.5;
                                            font-family: Poppins, Arial, Helvetica,
                                              sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 10px;
                                              text-align: center;
                                              mso-line-height-alt: 15px;
                                            "
                                          >
                                            <span style="font-size: 10px"
                                              ><span style=""
                                                ><span style="color: #999999">
                                                  <br /></span></span
                                              ><span style="color: #999999"
                                                >© 2022-23 Graceland Journals. All Rights
                                                Reserved.</span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-6"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        ></table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End -->
      </body>
    </html>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const sendOtp = (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: admin_email,
      pass: password,
    },
  });

  const mailOptions = {
    from: admin_email,
    to: email,
    subject: "Forget Password",
    html: `<!DOCTYPE html>

    <html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:PixelsPerInch>96</o:PixelsPerInch
              ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Abril+Fatface"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Bitter"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Permanent+Marker"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cabin"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oxygen"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Droid+Serif"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Shrikhand"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
    
          @media (max-width: 700px) {
            .desktop_hide table.icons-inner {
              display: inline-block !important;
            }
    
            .icons-inner {
              text-align: center;
            }
    
            .icons-inner td {
              margin: 0 auto;
            }
    
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
    
            .mobile_hide {
              display: none;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
    
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
    
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #eef6f9;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #eef6f9;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #171817;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 10px;
                                  padding-bottom: 10px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="text-align: center; width: 100%">
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #c9dae2;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 16px;
                                          font-weight: 400;
                                          letter-spacing: normal;
                                          line-height: 150%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >Welcome</span
                                        >
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-3"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div align="center" style="line-height: 10px">
                                        <img
                                          alt="Banner"
                                          class="big"
                                          src="https://ik.imagekit.io/q4f02hrey/GraceLandBanner.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671610505334"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 680px;
                                            max-width: 100%;
                                          "
                                          title="Banner"
                                          width="680"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
          <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="row row-2"
          role="presentation"
          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
          width="100%"
          >
          <tbody>
            <tr>
            <td>
              <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row-content stack"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #031d4b;
                color: #ffffff;
                width: 680px;
              "
              width="680"
              >
              <tbody>
                <tr>
                <td
                  class="column column-1"
                  style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  font-weight: 400;
                  text-align: left;
                  vertical-align: top;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  border-top: 0px;
                  border-right: 0px;
                  border-bottom: 0px;
                  border-left: 0px;
                  "
                  width="100%"
                >
                  <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="image_block"
                  role="presentation"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                  "
                  width="100%"
                  >
                  <tr>
                    <td
                    style="
                      padding-bottom: 20px;
                      padding-left: 30px;
                      padding-right: 30px;
                      padding-top: 45px;
                      width: 100%;
                    "
                    >
                    <div align="center" style="line-height: 10px">
                      <!-- <img
                      alt="Logo"
                      src="images/fathers-day.png"
                      style="
                        display: block;
                        height: auto;
                        border: 0;
                        width: 272px;
                        max-width: 100%;
                      "
                      title="Logo"
                      width="272"
                      /> -->
                      <p style="font-weight: bolder;letter-spacing: .7rem;background-color: #8080803b;padding: 1rem;">${otp}</p>
                    </div>
                    </td>
                  </tr>
                  </table>
                </td>
                </tr>
              </tbody>
              </table>
            </td>
            </tr>
          </tbody>
          </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-4"
                  role="presentation"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    background-size: auto;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-size: auto;
                            background-color: #ffffff;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 30px;
                                  padding-right: 30px;
                                  padding-top: 30px;
                                  padding-bottom: 30px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 30px;
                                        padding-left: 30px;
                                        padding-right: 30px;
                                        padding-top: 60px;
                                        text-align: center;
                                        width: 100%;
                                      "
                                    >
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #171817;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 18px;
                                          font-weight: 400;
                                          letter-spacing: 4px;
                                          line-height: 150%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >THE ESSENTIALS</span
                                        >
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            font-family: Poppins, Arial, Helvetica,
                                              sans-serif;
                                            mso-line-height-alt: 18px;
                                            color: #1d1d1b;
                                            line-height: 1.5;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <span style="font-size: 16px"
                                              >This template page is used by SMSOTPDelivery as the content of the SMS that it sends to the user.</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-5"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #1c1c1c;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 15px;
                                  padding-bottom: 15px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <h3
                                        style="
                                          margin: 0;
                                          color: #ffffff;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 20px;
                                          font-weight: 400;
                                          letter-spacing: normal;
                                          line-height: 120%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >#Graceland Journals</span
                                        >
                                      </h3>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 30px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 10px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="social-table"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="108px"
                                      >
                                        <tr>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.facebook.com/"
                                              target="_blank"
                                              ><img
                                                alt="Facebook"
                                                height="32"
                                                src="https://www.freeiconspng.com/uploads/images-facebook-f-logo-png-transparent-background-page-2-29.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="facebook"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.linkedin.com/"
                                              target="_blank"
                                              ><img
                                                alt="Linkedin"
                                                height="32"
                                                src="https://www.freeiconspng.com/uploads/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="linkedin"
                                                width="32"
                                            /></a>
                                          </td>

                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #393d47;
                                            line-height: 1.5;
                                            font-family: Poppins, Arial, Helvetica,
                                              sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 10px;
                                              text-align: center;
                                              mso-line-height-alt: 15px;
                                            "
                                          >
                                            <span style="font-size: 10px"
                                              ><span style=""
                                                ><span style="color: #999999">
                                                  <br /></span></span
                                              ><span style="color: #999999"
                                                >© 2022-23 Graceland Journals. All Rights
                                                Reserved.</span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-6"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        ></table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End -->
      </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const chapwd = (email, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: admin_email,
      pass: password,
    },
  });

  const mailOptions = {
    from: admin_email,
    to: email,
    subject: "Forget Password",
    html: `<!DOCTYPE html>

    <html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:PixelsPerInch>96</o:PixelsPerInch
              ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Abril+Fatface"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Bitter"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Permanent+Marker"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cabin"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oxygen"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Droid+Serif"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Shrikhand"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
    
          @media (max-width: 700px) {
            .desktop_hide table.icons-inner {
              display: inline-block !important;
            }
    
            .icons-inner {
              text-align: center;
            }
    
            .icons-inner td {
              margin: 0 auto;
            }
    
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
    
            .mobile_hide {
              display: none;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
    
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
    
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #eef6f9;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #eef6f9;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #171817;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 10px;
                                  padding-bottom: 10px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="text-align: center; width: 100%">
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #c9dae2;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 16px;
                                          font-weight: 400;
                                          letter-spacing: normal;
                                          line-height: 150%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >Welcome</span
                                        >
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-3"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div align="center" style="line-height: 10px">
                                        <img
                                          alt="Banner"
                                          class="big"
                                         src="https://ik.imagekit.io/q4f02hrey/GraceLandBanner.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671610505334"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 680px;
                                            max-width: 100%;
                                          "
                                          title="Banner"
                                          width="680"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
          <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="row row-2"
          role="presentation"
          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
          width="100%"
          >
          <tbody>
            <tr>
            <td>
              <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row-content stack"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #031d4b;
                color: #ffffff;
                width: 680px;
              "
              width="680"
              >
              <tbody>
                <tr>
                <td
                  class="column column-1"
                  style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  font-weight: 400;
                  text-align: left;
                  vertical-align: top;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  border-top: 0px;
                  border-right: 0px;
                  border-bottom: 0px;
                  border-left: 0px;
                  "
                  width="100%"
                >
                  <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="image_block"
                  role="presentation"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                  "
                  width="100%"
                  >
                  <tr>
                    <td
                    style="
                      padding-bottom: 20px;
                      padding-left: 30px;
                      padding-right: 30px;
                      padding-top: 45px;
                      width: 100%;
                    "
                    >
                    <div align="center" style="line-height: 10px">
                      <!-- <img
                      alt="Logo"
                      src="images/fathers-day.png"
                      style="
                        display: block;
                        height: auto;
                        border: 0;
                        width: 272px;
                        max-width: 100%;
                      "
                      title="Logo"
                      width="272"
                      /> -->
                      <p style="font-weight: bolder;background-color: #8080803b;padding: 1rem;">${content}</p>
                    </div>
                    </td>
                  </tr>
                  </table>
                </td>
                </tr>
              </tbody>
              </table>
            </td>
            </tr>
          </tbody>
          </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-4"
                  role="presentation"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    background-size: auto;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-size: auto;
                            background-color: #ffffff;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 30px;
                                  padding-right: 30px;
                                  padding-top: 30px;
                                  padding-bottom: 30px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 30px;
                                        padding-left: 30px;
                                        padding-right: 30px;
                                        padding-top: 60px;
                                        text-align: center;
                                        width: 100%;
                                      "
                                    >
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #171817;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 18px;
                                          font-weight: 400;
                                          letter-spacing: 4px;
                                          line-height: 150%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >THE ESSENTIALS</span
                                        >
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            font-family: Poppins, Arial, Helvetica,
                                              sans-serif;
                                            mso-line-height-alt: 18px;
                                            color: #1d1d1b;
                                            line-height: 1.5;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <span style="font-size: 16px"
                                              >Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed do
                                              eiusmod tempor incididunt ut labore et
                                              dolore magna aliqua.</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-5"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #1c1c1c;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 15px;
                                  padding-bottom: 15px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <h3
                                        style="
                                          margin: 0;
                                          color: #ffffff;
                                          direction: ltr;
                                          font-family: Poppins, Arial, Helvetica,
                                            sans-serif;
                                          font-size: 20px;
                                          font-weight: 400;
                                          letter-spacing: normal;
                                          line-height: 120%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >#Graceland Journals</span
                                        >
                                      </h3>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 30px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 10px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="social-table"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="108px"
                                      >
                                        <tr>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.facebook.com/"
                                              target="_blank"
                                              ><img
                                                alt="Facebook"
                                                height="32"
                                                src="https://www.freeiconspng.com/uploads/images-facebook-f-logo-png-transparent-background-page-2-29.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="facebook"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.linkedin.com/"
                                              target="_blank"
                                              ><img
                                                alt="Linkedin"
                                                height="32"
                                                src="https://www.freeiconspng.com/uploads/displaying-19-gallery-images-for-linkedin-logo-png-25.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="linkedin"
                                                width="32"
                                            /></a>
                                          </td>

                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="30"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #393d47;
                                            line-height: 1.5;
                                            font-family: Poppins, Arial, Helvetica,
                                              sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 10px;
                                              text-align: center;
                                              mso-line-height-alt: 15px;
                                            "
                                          >
                                            <span style="font-size: 10px"
                                              ><span style=""
                                                ><span style="color: #999999">
                                                  <br /></span></span
                                              ><span style="color: #999999"
                                                >© 2022-23 Graceland Journals. All Rights
                                                Reserved.</span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-6"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 680px;
                          "
                          width="680"
                        ></table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End -->
      </body>
    </html>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
