import { Model, Table, Field } from "../src";

@Table()
class TestOne extends Model {
    @Field() public oneColumn1: number;
    @Field() public oneColumn2: string;
}

@Table()
class TestTwo extends Model {
    @Field() public twoColumn1: number;
    @Field() public twoColumn2: string;
}

describe("Base Model Testing", () => {
    let testOne = new TestOne();;
    let testTwo = new TestTwo();;

    test("Columns testing", () => {
        expect(testOne.getColumns().length).toBe(2);
        expect(testTwo.getColumns().length).toBe(2);
    });

    test("Meta testing", () => {
        expect(testOne.getMeta().target).toBe(testOne.constructor);
        expect(testTwo.getMeta().target).toBe(testTwo.constructor);
    });
});