/// <reference types="vite/client" />

const svgResources = new Map();
const imageResources = new Map();

function loadIcons() {
  let modules = import.meta.glob("@/assets/images/**/*.svg", {
    as: "raw",
    eager: true,
  });
  for (const fileName in modules) {
    const name = fileName.substring(fileName.lastIndexOf("/") + 1, fileName.length - 4);
    svgResources.set(name, modules[fileName]);
  }

  modules = import.meta.glob("@/assets/images/**/*.png", {
    as: "url",
    eager: true,
  });
  // debugger;
  for (const fileName in modules) {
    const name = fileName.substring(fileName.lastIndexOf("/") + 1, fileName.length - 4);
    imageResources.set(name, modules[fileName]);
  }
  // console.log(imageResources);
  // console.log(getIcon("lobby"));
}

function getSvgIcon(name) {
  return svgResources.get(name);
}

function getImageUrl(name) {
  return imageResources.get(name);
}

// export svgResources;

// export default iconMap;
// export { iconMap, getIcon, svgResources };
export { loadIcons, getSvgIcon, getImageUrl, svgResources };
