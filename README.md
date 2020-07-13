## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|text|null: true, foreign_key: true|
|uer_name|text|null: true, foreign_key: true|
|email_address|text|null: true, foreign_key: true|

## Association
- has_many :groups
- has_many_to :message
- hasa_many :chat


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|text|null: true, foreign_key: true|
|group_id|text|null: true, foreign_key: true|

### Association

- has_many :users

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|text|null: true, foreign_key: true|
|messagetext_id|text|null: true, foreign_key: true|
|photo_id|text|null: false, foreign_key: true|

### Association
- has_many :user
- belongs_to :groups
- belongs_to :chat

## chatテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: true, foreign_key: true|
|grouos_id|integer|null: true, foreign_key: true|
|message_id|integer|null: true, foreign_key: true|

### Association
- has_many :user
- balong_to :groups
- has_many :message


# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
