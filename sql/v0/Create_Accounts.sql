create table accounts (
	user_id serial primary key,
	username varchar(50) unique not null
)