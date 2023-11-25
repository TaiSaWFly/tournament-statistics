import { MutableRefObject } from "react";
import { BlockDimentionsType } from "../../../ts/types/BlockDimentionsType";
import { blockDimentionsInitialState } from "../../../data/AppData/defaultInitialStateData";

const getBlockDimensions = (
    ref: MutableRefObject<HTMLElement | null>
): BlockDimentionsType => {
    return ref.current?.clientWidth
        ? {
              clientWidth: ref.current.clientWidth,
              clientHeight: ref.current.clientHeight
          }
        : blockDimentionsInitialState;
};

export default getBlockDimensions;
