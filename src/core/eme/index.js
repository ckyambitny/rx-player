/**
 * Copyright 2015 CANAL+ Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// EME is feature-switchable
const HAS_EME = __FEATURES__.EME;

const handleEncryption = HAS_EME ?
  require("./encrypted_event.js") :
  () => {
    throw new Error("The EME feature is not included in your build.");
  };

const getCurrentKeySystem = HAS_EME ?
  require("./key_system.js").getCurrentKeySystem :
  () => {
    throw new Error("The EME feature is not included in your build.");
  };

const dispose = HAS_EME ?
  require("./dispose.js") :
  () => {};

export {
  handleEncryption,
  getCurrentKeySystem,
  dispose,
};
