import { TextureLoader, NearestFilter, RepeatWrapping } from "three";
import { dirtImg, grassImg, glassImg, logImg, woodImg } from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const woodTexture = new TextureLoader().load(woodImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = grassTexture;

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
  dirtTexture,
  glassTexture,
  grassTexture,
  groundTexture,
  woodTexture,
  logTexture,
};
