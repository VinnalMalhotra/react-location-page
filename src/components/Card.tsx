import * as React from "react";

export interface CardProps {
  title: string;
  url: string;
}

const Card = ({ title, url }: CardProps) => {
  return (
    <>
      <div class="flex">
        <div class="w-1/2">
          <div class="flex-1">
            <div className="centered-container">
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-16">
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Office Information
                    </h5>
                  </a>
                  <p className="mb-3 mt-8 font-normal text-gray-700 dark:text-gray-400">
                    Karl-Liebknecht-Straße 29A Suite 1.22 10178 Berlin Germany
                    <div>030 800933813</div>
                    <div>info@yext.com</div>
                  </p>
                </div>
                <div>
                  {/* <img className="rounded-t-lg" src={url} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2">
          <div class="flex-2">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-16">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Office Hours
                  </h5>
                </a>
                <p className="mb-3 mt-8 font-normal text-gray-700 dark:text-gray-400">
                  Monday 9:00AM - 6:00PM <br />
                  Tuesday 9:00AM - 6:00PM <br /> Wednesday 9:00AM - 6:00PM{" "}
                  <br />
                  Thursday 9:00AM - 6:00PM <br />
                  Friday 9:00AM - 6:00PM <br />
                  Saturday Closed <br />
                  Sunday Closed <br />
                </p>
              </div>
              <div>
                {/* <img className="rounded-t-lg" src={url} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1em",
        }}
      >
        <div style={{ padding: "0.5em" }}>
          <img
            src="https://a.mktgcdn.com/p/czy8WMVlA4gTYidJ8qCF2b9ss9FeLdzOPUQATCp1aYM/1000x667.jpg"
            style={{ width: "35em" }}
          ></img>
        </div>
        <div style={{ padding: "0.5em" }}>
          <img
            src="data:image/jpeg;base64,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"
            style={{ width: "41em" }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Card;
