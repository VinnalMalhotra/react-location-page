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
            src="https://a.mktgcdn.com/p/czy8WMVlA4gTYidJ8qCF2b9ss9FeLdzOPUQATCp1aYM/1000x667.jpg"
            style={{ width: "42em" }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Card;
