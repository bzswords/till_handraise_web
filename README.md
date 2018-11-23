# Till Handraise Web

This Rails application is a simple lead generation and newsletter site for Till.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Ruby 2.5.1
* Homebrew
* PostgreSQL 10.5

### Installing

Once your prerequisites are installed, follow these steps:

1) Install Bundler, our dependency manager for Ruby

```
> gem install bundler
```

2) Install dependencies

```
> bundle install
```

3) Set up Postgres database

```
> createdb dev_till_core
> createuser -P -s -e till (when it prompts you to create a password user till321A)
```

4) Run migrations

```
> bundle exec rails db:migrate
```

At this point you should be able to open a Rails console and manually create a Lead:

```
> bundle exec rails c
rails console> Lead.create(email: 'test@test.com')
```

## Local Development

Start your server:

```
bundle exec rails s
```

Navigate to localhost:3000 and start making your changes.

## Running the tests

No unit tests lolol

But if needed I would use RSpec.

## Deployment

[Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html) is used for deployment. There are 2 ways to deploy with [eb](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html), but before anything you must get access to Till's AWS instance.

Once you reach that point, I would recommend [setting up the eb cli](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html). It's super easy to use once set up...all you have to do is run `eb deploy` and it will handle the rest.

Alternatively you can use the Elastic Beanstalk dashboard in the AWS console. There you will be able to manage environments and upload compressed application versions for deployment.

## Built With

* [Rails](https://rubyonrails.org/) - The web framework used
* [Bundler](https://bundler.io/) - Dependency Management
* [ButterCMS](https://buttercms.com/) - CMS for Newsletters

## Contributing

Cut a branch, make changes, and open a PR. It's easy!

## Versioning

Decided to not follow any formal versioning process for this repo. The project is small and limited in scope, with a high likelihood of being deprecated. If this changes, I would recommend [semantic versioning](http://semver.org/) in conjunction with git tags.

## Authors

* **Bryan Swords** - *Initial work* - [bzswords](https://github.com/bzswords)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* The Till team for QA and feedback
