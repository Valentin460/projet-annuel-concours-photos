<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MembreConcoursWinRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MembreConcoursWinRepository::class)]
#[ApiResource()]
class MembreConcoursWin
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $rank_price = null;

    #[ORM\ManyToOne(inversedBy: 'membreConcoursWin')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Membre $concours = null;

    #[ORM\ManyToOne(inversedBy: 'membreConcoursWin')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Concours $membre = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRankPrice(): ?int
    {
        return $this->rank_price;
    }

    public function setRankPrice(int $rank_price): self
    {
        $this->rank_price = $rank_price;

        return $this;
    }

    public function getConcours(): ?Membre
    {
        return $this->concours;
    }

    public function setConcours(?Membre $concours): self
    {
        $this->concours = $concours;

        return $this;
    }

    public function getMembre(): ?Concours
    {
        return $this->membre;
    }

    public function setMembre(?Concours $membre): self
    {
        $this->membre = $membre;

        return $this;
    }
}
