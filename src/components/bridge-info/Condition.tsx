import React from "react";
import { conditionMap, overallConditionMap } from "../NBIHashmaps";

const Condition = ({ condition }: { condition: any }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold">Condition</h3>
      <p className="text-sm">
        Bridge Condition: {overallConditionMap[condition[0].bridgeCondition]}
      </p>
      <p className="text-sm">
        Deck Condition: {conditionMap[condition[0].deckCond]}
      </p>
      <p className="text-sm">
        Superstructure Condition: {conditionMap[condition[0].superstructureCond]}
      </p>
      <p className="text-sm">
        Substructure Condition: {conditionMap[condition[0].substructureCond]}
      </p>
      <p className="text-sm">
        Channel Condition: {conditionMap[condition[0].channelCond] || "N/A"}
      </p>
    </section>
  );
};

export default Condition;
