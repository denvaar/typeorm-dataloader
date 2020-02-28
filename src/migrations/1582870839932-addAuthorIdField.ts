import {MigrationInterface, QueryRunner} from "typeorm";

export class addAuthorIdField1582870839932 implements MigrationInterface {
    name = 'addAuthorIdField1582870839932'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_24b753b0490a992a6941451f405"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ALTER COLUMN "author_id" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_24b753b0490a992a6941451f405" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_24b753b0490a992a6941451f405"`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ALTER COLUMN "author_id" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_24b753b0490a992a6941451f405" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
