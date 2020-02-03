import {
  handleCors,
  handleCompression,
  handleBodyRequestParsing,
  handleLogging
} from "./common";

export default [handleCors, handleCompression, handleBodyRequestParsing, handleLogging]
