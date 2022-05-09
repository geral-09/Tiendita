import React, { useContext, useState } from "react";
import { LocationContext } from "../context/Location";
import { ModalBg, ModalLocalContainer } from "../styles/main";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import FirstModalContent from "./FirstModalContent";
import SecondModal from "./SecondModal";

const ModalLocation = ({ setShowModal }) => {
  const [showNextModal, setShowNextModal] = useState(false);

  return (
    <ModalBg>
      <ModalLocalContainer>
        <div className="closeIcon" onClick={() => setShowModal(false)}>
          <i className="icon-closeIcon"></i>
        </div>

        {showNextModal ? (
          <SecondModal />
        ) : (
          <FirstModalContent
            setShowNextModal={setShowNextModal}
            showNextModal={showNextModal}
          />
        )}
      </ModalLocalContainer>
    </ModalBg>
  );
};

export default ModalLocation;
