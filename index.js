/**
 * Copyright 2018 Phill Lemon, Truncus Encephali Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    "use strict";
    var cobs = require('cobs');

    function COBS(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        node.mode = n.mode;

        node.on("input", function(msg) {
            if (node.mode == "encode") {
                msg.payload = cobs.encode(msg.payload);
                node.send(msg);
            } else if (node.mode == "decode") {
                msg.payload = cobs.decode(msg.payload);
                node.send(msg);
            }
        });
    }

    RED.nodes.registerType("cobs", COBS);
};
