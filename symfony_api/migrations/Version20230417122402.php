<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230417122402 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE advertisements (id INT AUTO_INCREMENT NOT NULL, organization_id INT NOT NULL, advertising_places_id INT NOT NULL, date_start DATE NOT NULL, date_end DATE NOT NULL, url_click VARCHAR(255) NOT NULL, balise_alt VARCHAR(255) NOT NULL, price_sell INT NOT NULL, nb_clicks INT NOT NULL, INDEX IDX_5C755F1E32C8A3DE (organization_id), INDEX IDX_5C755F1E3F4BC5E5 (advertising_places_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE advertising_places (id INT AUTO_INCREMENT NOT NULL, state TINYINT(1) NOT NULL, name_place VARCHAR(255) NOT NULL, height_px INT NOT NULL, width_px INT NOT NULL, price_reference INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_participant (id INT AUTO_INCREMENT NOT NULL, category_participant VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_participant_contests (category_participant_id INT NOT NULL, contests_id INT NOT NULL, INDEX IDX_F1CB7F4B7C0C7324 (category_participant_id), INDEX IDX_F1CB7F4B86069206 (contests_id), PRIMARY KEY(category_participant_id, contests_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contests (id INT AUTO_INCREMENT NOT NULL, organizations_publish_id INT NOT NULL, state TINYINT(1) NOT NULL, name_contests VARCHAR(255) NOT NULL, visual_contests VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, rules LONGTEXT NOT NULL, prices LONGTEXT NOT NULL, date_creation DATE NOT NULL, date_publication DATE NOT NULL, date_start_submissions DATE NOT NULL, date_end_submissions DATE NOT NULL, date_start_votes DATE NOT NULL, date_end_votes DATE NOT NULL, date_results DATE NOT NULL, jury_votes_weighting INT NOT NULL, nb_max_votes INT NOT NULL, nb_prices INT NOT NULL, criteria_age_min INT NOT NULL, criteria_age_max INT NOT NULL, INDEX IDX_A0042154C9182F1A (organizations_publish_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contests_organizations (id INT AUTO_INCREMENT NOT NULL, contests_id INT NOT NULL, organizations_id INT NOT NULL, date_start DATE NOT NULL, date_end DATE NOT NULL, rank_sponsor INT NOT NULL, price INT NOT NULL, INDEX IDX_4F180B9086069206 (contests_id), INDEX IDX_4F180B9086288A55 (organizations_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE criteria (id INT AUTO_INCREMENT NOT NULL, criteria VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE criteria_contests (criteria_id INT NOT NULL, contests_id INT NOT NULL, INDEX IDX_D005C4D0990BEA15 (criteria_id), INDEX IDX_D005C4D086069206 (contests_id), PRIMARY KEY(criteria_id, contests_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE files (id INT AUTO_INCREMENT NOT NULL, created_by_id INT NOT NULL, pictures_id INT DEFAULT NULL, contests_id INT DEFAULT NULL, organizations_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, extension VARCHAR(255) NOT NULL, path VARCHAR(255) NOT NULL, INDEX IDX_6354059B03A8386 (created_by_id), UNIQUE INDEX UNIQ_6354059BC415685 (pictures_id), INDEX IDX_635405986069206 (contests_id), UNIQUE INDEX UNIQ_635405986288A55 (organizations_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE members (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, state TINYINT(1) NOT NULL, pseudo VARCHAR(255) DEFAULT NULL, date_register DATE NOT NULL, date_drop DATE DEFAULT NULL, date_maj DATE DEFAULT NULL, date_last_connection DATE DEFAULT NULL, picture_profile VARCHAR(255) DEFAULT NULL, description_photographer LONGTEXT DEFAULT NULL, personal_state VARCHAR(255) NOT NULL, category_photographer VARCHAR(255) NOT NULL, website VARCHAR(255) DEFAULT NULL, social_media VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_45A0D2FFA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE members_contests (id INT AUTO_INCREMENT NOT NULL, contests_id INT NOT NULL, members_id INT NOT NULL, date_invitation DATE NOT NULL, date_validate DATE NOT NULL, fonction VARCHAR(255) DEFAULT NULL, INDEX IDX_9B8D51AF86069206 (contests_id), INDEX IDX_9B8D51AFBD01F5ED (members_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE members_contests_win (id INT AUTO_INCREMENT NOT NULL, contests_id INT NOT NULL, members_id INT NOT NULL, rank_price INT NOT NULL, INDEX IDX_6C27C39286069206 (contests_id), INDEX IDX_6C27C392BD01F5ED (members_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE members_pictures (id INT AUTO_INCREMENT NOT NULL, pictures_id INT NOT NULL, members_id INT NOT NULL, date_vote DATE NOT NULL, INDEX IDX_B4F55F3BBC415685 (pictures_id), INDEX IDX_B4F55F3BBD01F5ED (members_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE organizations (id INT AUTO_INCREMENT NOT NULL, state TINYINT(1) NOT NULL, name_organizations VARCHAR(255) NOT NULL, type_organizations VARCHAR(255) DEFAULT NULL, description VARCHAR(255) NOT NULL, logo VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, cp VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, url_website VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, tel VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE organizations_user (organizations_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_2E5F85D886288A55 (organizations_id), INDEX IDX_2E5F85D8A76ED395 (user_id), PRIMARY KEY(organizations_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pictures (id INT AUTO_INCREMENT NOT NULL, contests_id INT NOT NULL, members_id INT NOT NULL, state TINYINT(1) NOT NULL, name_pictures VARCHAR(255) NOT NULL, date_submissions DATE NOT NULL, file VARCHAR(255) NOT NULL, nb_votes INT NOT NULL, price_win TINYINT(1) NOT NULL, price_rank INT NOT NULL, INDEX IDX_8F7C2FC086069206 (contests_id), INDEX IDX_8F7C2FC0BD01F5ED (members_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE theme (id INT AUTO_INCREMENT NOT NULL, theme VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE theme_contests (theme_id INT NOT NULL, contests_id INT NOT NULL, INDEX IDX_23A332359027487 (theme_id), INDEX IDX_23A332386069206 (contests_id), PRIMARY KEY(theme_id, contests_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, etat TINYINT(1) NOT NULL, date_creation DATE NOT NULL, genre LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', first_name VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, date_born DATE NOT NULL, adresse VARCHAR(255) NOT NULL, cp VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, tel_mobile VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE advertisements ADD CONSTRAINT FK_5C755F1E32C8A3DE FOREIGN KEY (organization_id) REFERENCES organizations (id)');
        $this->addSql('ALTER TABLE advertisements ADD CONSTRAINT FK_5C755F1E3F4BC5E5 FOREIGN KEY (advertising_places_id) REFERENCES advertising_places (id)');
        $this->addSql('ALTER TABLE category_participant_contests ADD CONSTRAINT FK_F1CB7F4B7C0C7324 FOREIGN KEY (category_participant_id) REFERENCES category_participant (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE category_participant_contests ADD CONSTRAINT FK_F1CB7F4B86069206 FOREIGN KEY (contests_id) REFERENCES contests (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contests ADD CONSTRAINT FK_A0042154C9182F1A FOREIGN KEY (organizations_publish_id) REFERENCES organizations (id)');
        $this->addSql('ALTER TABLE contests_organizations ADD CONSTRAINT FK_4F180B9086069206 FOREIGN KEY (contests_id) REFERENCES organizations (id)');
        $this->addSql('ALTER TABLE contests_organizations ADD CONSTRAINT FK_4F180B9086288A55 FOREIGN KEY (organizations_id) REFERENCES contests (id)');
        $this->addSql('ALTER TABLE criteria_contests ADD CONSTRAINT FK_D005C4D0990BEA15 FOREIGN KEY (criteria_id) REFERENCES criteria (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE criteria_contests ADD CONSTRAINT FK_D005C4D086069206 FOREIGN KEY (contests_id) REFERENCES contests (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE files ADD CONSTRAINT FK_6354059B03A8386 FOREIGN KEY (created_by_id) REFERENCES members (id)');
        $this->addSql('ALTER TABLE files ADD CONSTRAINT FK_6354059BC415685 FOREIGN KEY (pictures_id) REFERENCES pictures (id)');
        $this->addSql('ALTER TABLE files ADD CONSTRAINT FK_635405986069206 FOREIGN KEY (contests_id) REFERENCES contests (id)');
        $this->addSql('ALTER TABLE files ADD CONSTRAINT FK_635405986288A55 FOREIGN KEY (organizations_id) REFERENCES organizations (id)');
        $this->addSql('ALTER TABLE members ADD CONSTRAINT FK_45A0D2FFA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE members_contests ADD CONSTRAINT FK_9B8D51AF86069206 FOREIGN KEY (contests_id) REFERENCES contests (id)');
        $this->addSql('ALTER TABLE members_contests ADD CONSTRAINT FK_9B8D51AFBD01F5ED FOREIGN KEY (members_id) REFERENCES members (id)');
        $this->addSql('ALTER TABLE members_contests_win ADD CONSTRAINT FK_6C27C39286069206 FOREIGN KEY (contests_id) REFERENCES members (id)');
        $this->addSql('ALTER TABLE members_contests_win ADD CONSTRAINT FK_6C27C392BD01F5ED FOREIGN KEY (members_id) REFERENCES contests (id)');
        $this->addSql('ALTER TABLE members_pictures ADD CONSTRAINT FK_B4F55F3BBC415685 FOREIGN KEY (pictures_id) REFERENCES members (id)');
        $this->addSql('ALTER TABLE members_pictures ADD CONSTRAINT FK_B4F55F3BBD01F5ED FOREIGN KEY (members_id) REFERENCES pictures (id)');
        $this->addSql('ALTER TABLE organizations_user ADD CONSTRAINT FK_2E5F85D886288A55 FOREIGN KEY (organizations_id) REFERENCES organizations (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE organizations_user ADD CONSTRAINT FK_2E5F85D8A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE pictures ADD CONSTRAINT FK_8F7C2FC086069206 FOREIGN KEY (contests_id) REFERENCES contests (id)');
        $this->addSql('ALTER TABLE pictures ADD CONSTRAINT FK_8F7C2FC0BD01F5ED FOREIGN KEY (members_id) REFERENCES members (id)');
        $this->addSql('ALTER TABLE theme_contests ADD CONSTRAINT FK_23A332359027487 FOREIGN KEY (theme_id) REFERENCES theme (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE theme_contests ADD CONSTRAINT FK_23A332386069206 FOREIGN KEY (contests_id) REFERENCES contests (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE advertisements DROP FOREIGN KEY FK_5C755F1E32C8A3DE');
        $this->addSql('ALTER TABLE advertisements DROP FOREIGN KEY FK_5C755F1E3F4BC5E5');
        $this->addSql('ALTER TABLE category_participant_contests DROP FOREIGN KEY FK_F1CB7F4B7C0C7324');
        $this->addSql('ALTER TABLE category_participant_contests DROP FOREIGN KEY FK_F1CB7F4B86069206');
        $this->addSql('ALTER TABLE contests DROP FOREIGN KEY FK_A0042154C9182F1A');
        $this->addSql('ALTER TABLE contests_organizations DROP FOREIGN KEY FK_4F180B9086069206');
        $this->addSql('ALTER TABLE contests_organizations DROP FOREIGN KEY FK_4F180B9086288A55');
        $this->addSql('ALTER TABLE criteria_contests DROP FOREIGN KEY FK_D005C4D0990BEA15');
        $this->addSql('ALTER TABLE criteria_contests DROP FOREIGN KEY FK_D005C4D086069206');
        $this->addSql('ALTER TABLE files DROP FOREIGN KEY FK_6354059B03A8386');
        $this->addSql('ALTER TABLE files DROP FOREIGN KEY FK_6354059BC415685');
        $this->addSql('ALTER TABLE files DROP FOREIGN KEY FK_635405986069206');
        $this->addSql('ALTER TABLE files DROP FOREIGN KEY FK_635405986288A55');
        $this->addSql('ALTER TABLE members DROP FOREIGN KEY FK_45A0D2FFA76ED395');
        $this->addSql('ALTER TABLE members_contests DROP FOREIGN KEY FK_9B8D51AF86069206');
        $this->addSql('ALTER TABLE members_contests DROP FOREIGN KEY FK_9B8D51AFBD01F5ED');
        $this->addSql('ALTER TABLE members_contests_win DROP FOREIGN KEY FK_6C27C39286069206');
        $this->addSql('ALTER TABLE members_contests_win DROP FOREIGN KEY FK_6C27C392BD01F5ED');
        $this->addSql('ALTER TABLE members_pictures DROP FOREIGN KEY FK_B4F55F3BBC415685');
        $this->addSql('ALTER TABLE members_pictures DROP FOREIGN KEY FK_B4F55F3BBD01F5ED');
        $this->addSql('ALTER TABLE organizations_user DROP FOREIGN KEY FK_2E5F85D886288A55');
        $this->addSql('ALTER TABLE organizations_user DROP FOREIGN KEY FK_2E5F85D8A76ED395');
        $this->addSql('ALTER TABLE pictures DROP FOREIGN KEY FK_8F7C2FC086069206');
        $this->addSql('ALTER TABLE pictures DROP FOREIGN KEY FK_8F7C2FC0BD01F5ED');
        $this->addSql('ALTER TABLE theme_contests DROP FOREIGN KEY FK_23A332359027487');
        $this->addSql('ALTER TABLE theme_contests DROP FOREIGN KEY FK_23A332386069206');
        $this->addSql('DROP TABLE advertisements');
        $this->addSql('DROP TABLE advertising_places');
        $this->addSql('DROP TABLE category_participant');
        $this->addSql('DROP TABLE category_participant_contests');
        $this->addSql('DROP TABLE contests');
        $this->addSql('DROP TABLE contests_organizations');
        $this->addSql('DROP TABLE criteria');
        $this->addSql('DROP TABLE criteria_contests');
        $this->addSql('DROP TABLE files');
        $this->addSql('DROP TABLE members');
        $this->addSql('DROP TABLE members_contests');
        $this->addSql('DROP TABLE members_contests_win');
        $this->addSql('DROP TABLE members_pictures');
        $this->addSql('DROP TABLE organizations');
        $this->addSql('DROP TABLE organizations_user');
        $this->addSql('DROP TABLE pictures');
        $this->addSql('DROP TABLE theme');
        $this->addSql('DROP TABLE theme_contests');
        $this->addSql('DROP TABLE `user`');
    }
}
