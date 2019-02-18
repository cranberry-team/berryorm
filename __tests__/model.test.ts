import { Model, Table, Field } from "../src";

@Table({
    name: "someTableName"
})
class TestOne extends Model {
    @Field() public oneColumn1: number;
    @Field() public oneColumn2: string;
}

@Table()
class TestTwo extends Model {
    @Field({ dbName: "dbNameTwoColumn" }) public twoColumn1: number;
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

    test("Filter testing: table name", () => {
        expect(testOne.objects.filter().indexOf("someTableName")).toBeGreaterThan(0);
        expect(testTwo.objects.filter().indexOf("TestTwo")).toBeGreaterThan(0);
    });

    test("Filter testing: custom column name", () => {
        expect(testTwo.objects.filter().indexOf("dbNameTwoColumn")).toBeGreaterThan(0);
    });
});