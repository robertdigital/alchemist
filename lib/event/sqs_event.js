"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class SQSEvent {
  constructor(event) {
    this.event = event;
  }

  events() {
    return this.event.Records;
  }
}
exports.default = SQSEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmVudC9zcXNfZXZlbnQuanMiXSwibmFtZXMiOlsiU1FTRXZlbnQiLCJjb25zdHJ1Y3RvciIsImV2ZW50IiwiZXZlbnRzIiwiUmVjb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZSxNQUFNQSxRQUFOLENBQWU7QUFDNUJDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7O0FBRURDLFdBQVM7QUFDUCxXQUFPLEtBQUtELEtBQUwsQ0FBV0UsT0FBbEI7QUFDRDtBQVAyQjtrQkFBVEosUSIsImZpbGUiOiJzcXNfZXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTUVNFdmVudCB7XG4gIGNvbnN0cnVjdG9yKGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudCA9IGV2ZW50XG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQuUmVjb3JkcztcbiAgfVxufVxuIl19