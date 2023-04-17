<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContestsOrganizationsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContestsOrganizationsRepository::class)]
#[ApiResource()]
class ContestsOrganizations
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

    #[ORM\ManyToOne(inversedBy: 'contestsOrganizations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Organizations $contests = null;

    #[ORM\ManyToOne(inversedBy: 'contestsOrganizations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Contests $organizations = null;

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

    public function getContests(): ?Organizations
    {
        return $this->contests;
    }

    public function setContests(?Organizations $contests): self
    {
        $this->contests = $contests;

        return $this;
    }

    public function getOrganizations(): ?Contests
    {
        return $this->organizations;
    }

    public function setOrganizations(?Contests $organizations): self
    {
        $this->organizations = $organizations;

        return $this;
    }
}
