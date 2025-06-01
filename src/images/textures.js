import { TextureLoader, NearestFilter, RepeatWrapping } from "three";
import { stoneImg, dirtImg, grassImg, logImg, woodImg, wallMessage } from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const stoneTexture = new TextureLoader().load(stoneImg);
const woodTexture = new TextureLoader().load(woodImg);
const grassTexture = new TextureLoader().load(grassImg);
const logTexture = new TextureLoader().load(logImg);
const wallMessageTexture = new TextureLoader().load(wallMessage);
const groundTexture = grassTexture;

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;
wallMessageTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export { dirtTexture, grassTexture, groundTexture, woodTexture, logTexture, wallMessageTexture, stoneTexture };
