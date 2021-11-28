"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderInput = void 0;
const create_order_input_1 = require("./create-order.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateOrderInput extends (0, mapped_types_1.PartialType)(create_order_input_1.CreateOrderInput) {
}
exports.UpdateOrderInput = UpdateOrderInput;
//# sourceMappingURL=update-order.input.js.map