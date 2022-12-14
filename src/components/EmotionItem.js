import React from "react";

const EmotionItem = ({
  onClick,
  emotion_id,
  emotion_img,
  emotion_descript,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img}></img>
      <span>{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
