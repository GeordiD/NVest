create table tda_integrations (
	id serial primary key,
	user_id varchar(50) unique not null,
	code text not null
)