import React from "react";

const Condition = ({ condition }: { condition: any }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold">Condition</h3>
      <p>
        <span className="font-bold">Bridge Condition:</span>{" "}
        {condition[0].bridgeCondition}
      </p>
      <p>
        <span className="font-bold">Deck Condition:</span>{" "}
        {condition[0].deckCond}
      </p>
      <p>
        <span className="font-bold">Superstructure Condition:</span>{" "}
        {condition[0].superstructureCond}
      </p>
      <p>
        <span className="font-bold">Substructure Condition:</span>{" "}
        {condition[0].substructureCond}
      </p>
      <p>
        <span className="font-bold">Channel Condition:</span>{" "}
        {condition[0].channelCond || "N/A"}
      </p>
    </section>
  );
};

export default Condition;
