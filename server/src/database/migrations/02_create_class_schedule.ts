import Knex from 'knex';


// FAZ ALTERAÇÕES
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable(); // dia da semana
        table.integer('from').notNullable();  // que horas começa a atender
        table.integer('to').notNullable(); // até que horário atende
 
        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
} 

// DESFAZ ALTERAÇÕES
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}