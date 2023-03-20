<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ConcoursOrganisationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConcoursOrganisationRepository::class)]
#[ApiResource]
class ConcoursOrganisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_start = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_end = null;

    #[ORM\Column]
    private ?int $rank_sponsor = null;

    #[ORM\Column]
    private ?int $price = null;

    #[ORM\ManyToOne(inversedBy: 'concoursOrganisation')]
    #[ORM\JoinColumn(nullable: false)]
    private ?organisation $concours = null;

    #[ORM\ManyToOne(inversedBy: 'concoursOrganisation')]
    #[ORM\JoinColumn(nullable: false)]
    private ?concours $organisation = null;

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

    public function getRankSponsor(): ?int
    {
        return $this->rank_sponsor;
    }

    public function setRankSponsor(int $rank_sponsor): self
    {
        $this->rank_sponsor = $rank_sponsor;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getConcours(): ?organisation
    {
        return $this->concours;
    }

    public function setConcours(?organisation $concours): self
    {
        $this->concours = $concours;

        return $this;
    }

    public function getOrganisation(): ?concours
    {
        return $this->organisation;
    }

    public function setOrganisation(?concours $organisation): self
    {
        $this->organisation = $organisation;

        return $this;
    }
}
