
import React from 'react';
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function TipBox(props) {
  return (
    <Svg height={height * 0.5} width={width * 0.5} version="1.1" viewBox="0 0 100 100">
      <G id="Page-1" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <G id="SizeDog" fill="#E9F7F0" transform="translate(-98.000000, -567.000000)">
          <G id="Tip" transform="translate(98.000000, 567.000000)">
            <G id="Group">
              <Path id="Combined-Shape" d="M193.904904,63.1208121 C200.10388,69.0402707 205.468912,72 210,72 L187.904904,72 L6.07587103,72 C2.76216253,72 0.0758710319,69.3137085 0.0758710319,66 L0.0758710319,6 C0.0758710319,2.6862915 2.76216253,1.4968968e-15 6.07587103,8.8817842e-16 L187.904904,-8.8817842e-16 C191.218612,-1.4968968e-15 193.904904,2.6862915 193.904904,6 L193.904904,56 L193.904904,63.1208121 Z" transform="translate(105.037936, 36.000000) scale(-1, 1) translate(-105.037936, -36.000000) " />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}
