import React, { useEffect } from "react";

function ArtworkDetail() {
  const dummyKey = "129884";

  // let title, artist, medium, date, imageId, altText;

  // useEffect(() => {
  //   fetch(`https://api.artic.edu/api/v1/artworks/${dummyKey}`)
  //     .then((r) => r.json())
  //     .then((artDetails) => {
  //       title = artDetails.data.title;
  //       artist = artDetails.data.artist_display;
  //       medium = artDetails.data.medium_display;
  //       date = artDetails.data.date_display;
  //       imageId = artDetails.data.image_id;
  //       altText = artDetails.data.thumbnail.alt_text;
  //       console.log(date, altText);
  //     });
  // }, []);

  const title = "Starry Night and the Astronauts";
  const imageId = "e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9";
  const artist = "Alma Thomas";
  const medium = "American, 1891–1978 Acrylic on canvas";
  const date = "1972";
  const altText =
    "Abstract painting composed of small vertical dabs of multiple shades of blue with a small area of similar strokes of red, orange, and yellow in the upper right.";

  const cardFavorited = true;
  const favoriteButtonSyntax = cardFavorited ? "♥ Favorited" : "♡ Favorite";

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={altText}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center justify-start">
                <span className="text-gray-600 ml-3 font-normal text-lg">
                  {date}
                </span>
              </span>
              <span className="flex ml-4 pl-3 py-1 border-l-2 border-gray-200 space-x-2s">
                <span className="flex items-center justify-start">
                  <span className="text-gray-600 ml-3 font-normal text-lg">
                    {artist}
                  </span>
                </span>
              </span>
            </div>
            <p className="leading-relaxed pb-3 italic">{medium}</p>
            <p className="leading-relaxed">{altText}</p>
            <div className="flex mt-6  pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex justify-between">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Back to Discover Page
              </button>
              <button className="flex ml-auto text-gray-500 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded">
                {/* "rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"> */}
                {favoriteButtonSyntax}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtworkDetail;
