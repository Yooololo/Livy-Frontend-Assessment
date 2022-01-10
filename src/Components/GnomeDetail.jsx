import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../Sass/Styles/GnomeDetail.scss";
// import { BsGenderMale } from "react-icons/bs";
// import { BsGenderFemale } from "react-icons/bs";
// import { GiFlame } from "react-icons/gi";
import { getGnomes } from "../Actions/actions.js";

export default function GnomeDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = window.location.href.split("/")[4];

  useEffect(() => {
    dispatch(getGnomes());
    // eslint-disable-next-line
  }, []);

  const gnome = useSelector((state) => state.allGnomes);
  const gnomeDetail =
    gnome &&
    gnome.Brastlewark &&
    gnome.Brastlewark.filter((gnome) => gnome.id === parseInt(id));

  function guessGender(name) {
    const nombre = name.toLowerCase().split(" ");
    if (
      nombre[0].slice(-1) === "a" ||
      nombre[0].slice(-1) === "e" ||
      nombre[0].slice(-1) === "i"
    ) {
      return <>(F)</>;
      // </div><BsGenderFemale className="femaleGender" />;
    }
    return <>(M)</>;
    // <BsGenderMale className="maleGender" />;
  }

  function findFriendId(friend) {
    for (let i = 0; i < gnome.Brastlewark.length; i++) {
      if (gnome.Brastlewark[i].name === friend) {
        return gnome.Brastlewark[i].id;
      }
    }
  }

  return (
    <div className="gnomedetailtodo">
      <div className="gnomedetailbackground">
        <div className="gnomedetailcontainer">
          <div className="gnomedetailbuttons">
            <Link className="gnomedetaillink" to="/home">
              <button className="gnomedetailboton">Home</button>
            </Link>
            <button
              className="gnomedetailboton"
              onClick={() => history.goBack()}
            >
              Back
            </button>
          </div>
          {gnome && gnome.Brastlewark && gnomeDetail[0] && (
            <div className="gnomedetaildata">
              <div className="gnomedetailcuadrado">
                <img
                  className="gnomedetailimage"
                  src={gnomeDetail[0].thumbnail}
                  alt={gnomeDetail[0].name}
                />
                <div className="gnomedetailinfo">
                  <div className="gnomedetailnamegender">
                    Name: {gnomeDetail[0].name}{" "}
                    {guessGender(gnomeDetail[0].name)}
                  </div>
                  <div className="gnomedetailage">
                    Age: {gnomeDetail[0].age} years old
                  </div>
                  <div className="gnomedetailid">ID: {gnomeDetail[0].id}</div>
                  <div className="gnomedetailweight">
                    Weight: {gnomeDetail[0].weight.toFixed(1)} kg
                  </div>
                  <div className="gnomedetailheight">
                    Height: {gnomeDetail[0].height.toFixed(1)} cm
                  </div>
                  <div className="gnomedetailhaircolor">
                    <div>Hair Color: {gnomeDetail[0].hair_color}</div>
                    <div
                      src={gnomeDetail[0].thumbnail}
                      className="gnomedetailhaircolorimage"
                      style={{ backgroundColor: gnomeDetail[0].hair_color }}
                    >
                      {/* {gnomeDetail[0].hair_color === "Black" ? (
                        <GiFlame style={{ color: "white" }} />
                      ) : (
                        <GiFlame style={{ color: "black" }} />
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="gnomedetailcuadrado">
                <div className="gnomedetailprofression">
                  Profression:
                  <div className="gnomedetailprofessions">
                    {gnomeDetail[0].professions &&
                    gnomeDetail[0].professions.length ? (
                      gnomeDetail[0].professions.map((profession) => (
                        <p
                          className="gnomedetaileachprofression"
                          key={profession}
                        >
                          {profession}
                        </p>
                      ))
                    ) : (
                      <p className="gnomedetaileachprofression">
                        {gnomeDetail[0].name} has no profression
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="gnomedetailcuadrado">
                <div className="gnomedetailfriend">
                  Friends:
                  {gnomeDetail[0].friends && gnomeDetail[0].friends.length ? (
                    gnomeDetail[0].friends.map((friend) => (
                      <Link
                        key={friend}
                        className="gnomedetaillink"
                        to={`/gnome/${findFriendId(friend)}`}
                      >
                        <p className="gnomedetaileachfriend">{friend}</p>
                      </Link>
                    ))
                  ) : (
                    <p className="gnomedetaileachnofriend">
                      {gnomeDetail[0].name} has no friends
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
