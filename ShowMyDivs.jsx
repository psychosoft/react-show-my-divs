import React from "react";

export const ShowMyDivs = ({
  children,
  HTMLTypeNames = ["all"],
  colors = [
    "#4D4D4D",
    "#999999",
    "#FFFFFF",
    "#F44E3B",
    "#FE9200",
    "#FCDC00",
    "#DBDF00",
    "#A4DD00",
    "#68CCCA",
    "#73D8FF",
    "#AEA1FF",
    "#FDA1FF",
    "#333333",
    "#808080",
    "#cccccc",
    "#D33115",
    "#E27300",
    "#FCC400",
    "#B0BC00",
    "#68BC00",
    "#16A5A5",
    "#009CE0",
    "#7B64FF",
    "#FA28FF",
    "#000000",
    "#666666",
    "#B3B3B3",
    "#9F0500",
    "#C45100",
    "#FB9E00",
    "#808900",
    "#194D33",
    "#0C797D",
    "#0062B1",
    "#653294",
    "#AB149E",
  ],
    border
}) => {
  function recursiveMap(children) {
    return React.Children.toArray(children).map((child) => {
      if (child["props"]?.children) {
        let childProps = HTMLTypeNames.some((a) => HTMLTypeNames.some((e) => 'all') || a == child["type"])
          ? {
              ...child["props"],
              ...{
                style: {
                  backgroundColor:
                    colors[Math.floor(Math.random() * colors.length )],
                  borderStyle: 'solid',
                  borderWidth: border ? 0 : 1,
                  borderColor: colors[Math.floor(Math.random() * colors.length)],
                },
              },
            }
          : child["props"];
        child = React.cloneElement(
          child,
          childProps,
          recursiveMap(child["props"]?.children),
        );
      }
      return child;
    });
  }

  return recursiveMap(children);
};
