import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { 
  Category, 
  CategoryImage, 
  CategoryText, 
  ActiveCategory, 
  ActiveText 
} from "../../screens/home/style";

export const CardCategory = ({ image, activeImage, name }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <TouchableOpacity onPress={toggleActive}>
      {active ? (
        <ActiveCategory>
          <CategoryImage source={activeImage} />
          <ActiveText>{name}</ActiveText>
        </ActiveCategory>
      ) : (
        <Category>
          <CategoryImage source={image} />
          <CategoryText>{name}</CategoryText>
        </Category>
      )}
    </TouchableOpacity>
  );
};
