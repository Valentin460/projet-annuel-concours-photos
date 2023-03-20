<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\AnnonceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AnnonceRepository::class)]
#[ApiResource()]
class Annonce
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_start = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_end = null;

    #[ORM\Column(length: 255)]
    private ?string $url_click = null;

    #[ORM\Column(length: 255)]
    private ?string $balise_alt = null;

    #[ORM\Column]
    private ?int $price_sell = null;

    #[ORM\Column]
    private ?int $nb_clicks = null;

    #[ORM\ManyToOne(inversedBy: 'annonce')]
    #[ORM\JoinColumn(nullable: false)]
    private ?organisation $organisation = null;

    #[ORM\ManyToOne(inversedBy: 'annonce')]
    #[ORM\JoinColumn(nullable: false)]
    private ?EspacePublicitaire $espace_publicitaire = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->date_start;
    }

    public function setDateStart(\DateTimeInterface $date_start): self
    {
        $this->date_start = $date_start;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->date_end;
    }

    public function setDateEnd(\DateTimeInterface $date_end): self
    {
        $this->date_end = $date_end;

        return $this;
    }

    public function getUrlClick(): ?string
    {
        return $this->url_click;
    }

    public function setUrlClick(string $url_click): self
    {
        $this->url_click = $url_click;

        return $this;
    }

    public function getBaliseAlt(): ?string
    {
        return $this->balise_alt;
    }

    public function setBaliseAlt(string $balise_alt): self
    {
        $this->balise_alt = $balise_alt;

        return $this;
    }

    public function getPriceSell(): ?int
    {
        return $this->price_sell;
    }

    public function setPriceSell(int $price_sell): self
    {
        $this->price_sell = $price_sell;

        return $this;
    }

    public function getNbClicks(): ?int
    {
        return $this->nb_clicks;
    }

    public function setNbClicks(int $nb_clicks): self
    {
        $this->nb_clicks = $nb_clicks;

        return $this;
    }

    public function getOrganisation(): ?organisation
    {
        return $this->organisation;
    }

    public function setOrganisation(?organisation $organisation): self
    {
        $this->organisation = $organisation;

        return $this;
    }

    public function getEspacePublicitaire(): ?EspacePublicitaire
    {
        return $this->espace_publicitaire;
    }

    public function setEspacePublicitaire(?EspacePublicitaire $espace_publicitaire): self
    {
        $this->espace_publicitaire = $espace_publicitaire;

        return $this;
    }
}
