<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230320150326 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE annonce (id INT AUTO_INCREMENT NOT NULL, organisation_id INT NOT NULL, espace_publicitaire_id INT NOT NULL, date_start DATE NOT NULL, date_end DATE NOT NULL, url_click VARCHAR(255) NOT NULL, balise_alt VARCHAR(255) NOT NULL, price_sell INT NOT NULL, nb_clicks INT NOT NULL, INDEX IDX_F65593E59E6B1585 (organisation_id), INDEX IDX_F65593E5BB9F088C (espace_publicitaire_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_participant (id INT AUTO_INCREMENT NOT NULL, category_participant VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_participant_concours (category_participant_id INT NOT NULL, concours_id INT NOT NULL, INDEX IDX_1E610F897C0C7324 (category_participant_id), INDEX IDX_1E610F89D11E3C7 (concours_id), PRIMARY KEY(category_participant_id, concours_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE concours (id INT AUTO_INCREMENT NOT NULL, organisation_publish_id INT NOT NULL, etat TINYINT(1) NOT NULL, name_concours VARCHAR(255) NOT NULL, visual_concours VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, reglement LONGTEXT NOT NULL, dotations LONGTEXT NOT NULL, date_creation DATE NOT NULL, date_publication DATE NOT NULL, date_start_soumission DATE NOT NULL, date_end_soumission DATE NOT NULL, date_start_votes DATE NOT NULL, date_end_votes DATE NOT NULL, date_results DATE NOT NULL, ponderation_votes_jury INT NOT NULL, nb_max_votes INT NOT NULL, nb_prix INT NOT NULL, critere_age_min INT NOT NULL, critere_age_max INT NOT NULL, INDEX IDX_4FAE5196FD9FB52 (organisation_publish_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE concours_organisation (id INT AUTO_INCREMENT NOT NULL, concours_id INT NOT NULL, organisation_id INT NOT NULL, date_start DATE NOT NULL, date_end DATE NOT NULL, rank_sponsor INT NOT NULL, price INT NOT NULL, INDEX IDX_6356D70DD11E3C7 (concours_id), INDEX IDX_6356D70D9E6B1585 (organisation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE critere (id INT AUTO_INCREMENT NOT NULL, critere VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE critere_concours (critere_id INT NOT NULL, concours_id INT NOT NULL, INDEX IDX_AC3840209E5F45AB (critere_id), INDEX IDX_AC384020D11E3C7 (concours_id), PRIMARY KEY(critere_id, concours_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE espace_publicitaire (id INT AUTO_INCREMENT NOT NULL, etat TINYINT(1) NOT NULL, name_place VARCHAR(255) NOT NULL, height_px INT NOT NULL, width_px INT NOT NULL, price_reference INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE membre (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, etat TINYINT(1) NOT NULL, pseudo VARCHAR(255) DEFAULT NULL, date_register DATE NOT NULL, date_drop DATE DEFAULT NULL, date_maj DATE DEFAULT NULL, date_last_connection DATE DEFAULT NULL, picture_profile VARCHAR(255) DEFAULT NULL, description_photographe LONGTEXT DEFAULT NULL, statut_personnel VARCHAR(255) NOT NULL, categorie_photographe VARCHAR(255) NOT NULL, website VARCHAR(255) DEFAULT NULL, reseaux_sociaux VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_F6B4FB29A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE membre_concours (id INT AUTO_INCREMENT NOT NULL, concours_id INT NOT NULL, membre_id INT NOT NULL, date_invitation DATE NOT NULL, date_validate DATE NOT NULL, fonction VARCHAR(255) DEFAULT NULL, INDEX IDX_FACCB9A5D11E3C7 (concours_id), INDEX IDX_FACCB9A56A99F74A (membre_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE membre_concours_win (id INT AUTO_INCREMENT NOT NULL, concours_id INT NOT NULL, membre_id INT NOT NULL, rank_price INT NOT NULL, INDEX IDX_77BC8D64D11E3C7 (concours_id), INDEX IDX_77BC8D646A99F74A (membre_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE membre_photo (id INT AUTO_INCREMENT NOT NULL, photo_id INT NOT NULL, membre_id INT NOT NULL, date_vote DATE NOT NULL, INDEX IDX_A2918B997E9E4C8C (photo_id), INDEX IDX_A2918B996A99F74A (membre_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE organisation (id INT AUTO_INCREMENT NOT NULL, etat TINYINT(1) NOT NULL, name_organisation VARCHAR(255) NOT NULL, type_organisation VARCHAR(255) DEFAULT NULL, description VARCHAR(255) NOT NULL, logo VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, cp VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, url_website VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, tel VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE organisation_user (organisation_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_CFD7D6519E6B1585 (organisation_id), INDEX IDX_CFD7D651A76ED395 (user_id), PRIMARY KEY(organisation_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE photo (id INT AUTO_INCREMENT NOT NULL, concours_id INT NOT NULL, member_id INT NOT NULL, etat TINYINT(1) NOT NULL, name_photo VARCHAR(255) NOT NULL, date_soumission DATE NOT NULL, file VARCHAR(255) NOT NULL, nb_votes INT NOT NULL, price_win TINYINT(1) NOT NULL, price_rank INT NOT NULL, INDEX IDX_14B78418D11E3C7 (concours_id), INDEX IDX_14B784187597D3FE (member_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE theme (id INT AUTO_INCREMENT NOT NULL, theme VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE theme_concours (theme_id INT NOT NULL, concours_id INT NOT NULL, INDEX IDX_ED9043E159027487 (theme_id), INDEX IDX_ED9043E1D11E3C7 (concours_id), PRIMARY KEY(theme_id, concours_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, etat TINYINT(1) NOT NULL, date_creation DATE NOT NULL, genre LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', first_name VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, date_born DATE NOT NULL, adresse VARCHAR(255) NOT NULL, cp VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, tel_mobile VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE annonce ADD CONSTRAINT FK_F65593E59E6B1585 FOREIGN KEY (organisation_id) REFERENCES organisation (id)');
        $this->addSql('ALTER TABLE annonce ADD CONSTRAINT FK_F65593E5BB9F088C FOREIGN KEY (espace_publicitaire_id) REFERENCES espace_publicitaire (id)');
        $this->addSql('ALTER TABLE category_participant_concours ADD CONSTRAINT FK_1E610F897C0C7324 FOREIGN KEY (category_participant_id) REFERENCES category_participant (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE category_participant_concours ADD CONSTRAINT FK_1E610F89D11E3C7 FOREIGN KEY (concours_id) REFERENCES concours (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE concours ADD CONSTRAINT FK_4FAE5196FD9FB52 FOREIGN KEY (organisation_publish_id) REFERENCES organisation (id)');
        $this->addSql('ALTER TABLE concours_organisation ADD CONSTRAINT FK_6356D70DD11E3C7 FOREIGN KEY (concours_id) REFERENCES organisation (id)');
        $this->addSql('ALTER TABLE concours_organisation ADD CONSTRAINT FK_6356D70D9E6B1585 FOREIGN KEY (organisation_id) REFERENCES concours (id)');
        $this->addSql('ALTER TABLE critere_concours ADD CONSTRAINT FK_AC3840209E5F45AB FOREIGN KEY (critere_id) REFERENCES critere (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE critere_concours ADD CONSTRAINT FK_AC384020D11E3C7 FOREIGN KEY (concours_id) REFERENCES concours (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE membre ADD CONSTRAINT FK_F6B4FB29A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE membre_concours ADD CONSTRAINT FK_FACCB9A5D11E3C7 FOREIGN KEY (concours_id) REFERENCES concours (id)');
        $this->addSql('ALTER TABLE membre_concours ADD CONSTRAINT FK_FACCB9A56A99F74A FOREIGN KEY (membre_id) REFERENCES membre (id)');
        $this->addSql('ALTER TABLE membre_concours_win ADD CONSTRAINT FK_77BC8D64D11E3C7 FOREIGN KEY (concours_id) REFERENCES membre (id)');
        $this->addSql('ALTER TABLE membre_concours_win ADD CONSTRAINT FK_77BC8D646A99F74A FOREIGN KEY (membre_id) REFERENCES concours (id)');
        $this->addSql('ALTER TABLE membre_photo ADD CONSTRAINT FK_A2918B997E9E4C8C FOREIGN KEY (photo_id) REFERENCES membre (id)');
        $this->addSql('ALTER TABLE membre_photo ADD CONSTRAINT FK_A2918B996A99F74A FOREIGN KEY (membre_id) REFERENCES photo (id)');
        $this->addSql('ALTER TABLE organisation_user ADD CONSTRAINT FK_CFD7D6519E6B1585 FOREIGN KEY (organisation_id) REFERENCES organisation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE organisation_user ADD CONSTRAINT FK_CFD7D651A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE photo ADD CONSTRAINT FK_14B78418D11E3C7 FOREIGN KEY (concours_id) REFERENCES concours (id)');
        $this->addSql('ALTER TABLE photo ADD CONSTRAINT FK_14B784187597D3FE FOREIGN KEY (member_id) REFERENCES membre (id)');
        $this->addSql('ALTER TABLE theme_concours ADD CONSTRAINT FK_ED9043E159027487 FOREIGN KEY (theme_id) REFERENCES theme (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE theme_concours ADD CONSTRAINT FK_ED9043E1D11E3C7 FOREIGN KEY (concours_id) REFERENCES concours (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E59E6B1585');
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E5BB9F088C');
        $this->addSql('ALTER TABLE category_participant_concours DROP FOREIGN KEY FK_1E610F897C0C7324');
        $this->addSql('ALTER TABLE category_participant_concours DROP FOREIGN KEY FK_1E610F89D11E3C7');
        $this->addSql('ALTER TABLE concours DROP FOREIGN KEY FK_4FAE5196FD9FB52');
        $this->addSql('ALTER TABLE concours_organisation DROP FOREIGN KEY FK_6356D70DD11E3C7');
        $this->addSql('ALTER TABLE concours_organisation DROP FOREIGN KEY FK_6356D70D9E6B1585');
        $this->addSql('ALTER TABLE critere_concours DROP FOREIGN KEY FK_AC3840209E5F45AB');
        $this->addSql('ALTER TABLE critere_concours DROP FOREIGN KEY FK_AC384020D11E3C7');
        $this->addSql('ALTER TABLE membre DROP FOREIGN KEY FK_F6B4FB29A76ED395');
        $this->addSql('ALTER TABLE membre_concours DROP FOREIGN KEY FK_FACCB9A5D11E3C7');
        $this->addSql('ALTER TABLE membre_concours DROP FOREIGN KEY FK_FACCB9A56A99F74A');
        $this->addSql('ALTER TABLE membre_concours_win DROP FOREIGN KEY FK_77BC8D64D11E3C7');
        $this->addSql('ALTER TABLE membre_concours_win DROP FOREIGN KEY FK_77BC8D646A99F74A');
        $this->addSql('ALTER TABLE membre_photo DROP FOREIGN KEY FK_A2918B997E9E4C8C');
        $this->addSql('ALTER TABLE membre_photo DROP FOREIGN KEY FK_A2918B996A99F74A');
        $this->addSql('ALTER TABLE organisation_user DROP FOREIGN KEY FK_CFD7D6519E6B1585');
        $this->addSql('ALTER TABLE organisation_user DROP FOREIGN KEY FK_CFD7D651A76ED395');
        $this->addSql('ALTER TABLE photo DROP FOREIGN KEY FK_14B78418D11E3C7');
        $this->addSql('ALTER TABLE photo DROP FOREIGN KEY FK_14B784187597D3FE');
        $this->addSql('ALTER TABLE theme_concours DROP FOREIGN KEY FK_ED9043E159027487');
        $this->addSql('ALTER TABLE theme_concours DROP FOREIGN KEY FK_ED9043E1D11E3C7');
        $this->addSql('DROP TABLE annonce');
        $this->addSql('DROP TABLE category_participant');
        $this->addSql('DROP TABLE category_participant_concours');
        $this->addSql('DROP TABLE concours');
        $this->addSql('DROP TABLE concours_organisation');
        $this->addSql('DROP TABLE critere');
        $this->addSql('DROP TABLE critere_concours');
        $this->addSql('DROP TABLE espace_publicitaire');
        $this->addSql('DROP TABLE membre');
        $this->addSql('DROP TABLE membre_concours');
        $this->addSql('DROP TABLE membre_concours_win');
        $this->addSql('DROP TABLE membre_photo');
        $this->addSql('DROP TABLE organisation');
        $this->addSql('DROP TABLE organisation_user');
        $this->addSql('DROP TABLE photo');
        $this->addSql('DROP TABLE theme');
        $this->addSql('DROP TABLE theme_concours');
        $this->addSql('DROP TABLE `user`');
    }
}
