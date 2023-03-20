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
    private ?membre $concours = null;

    #[ORM\ManyToOne(inversedBy: 'membreConcoursWin')]
    #[ORM\JoinColumn(nullable: false)]
    private ?concours $membre = null;

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

    public function getConcours(): ?membre
    {
        return $this->concours;
    }

    public function setConcours(?membre $concours): self
    {
        $this->concours = $concours;

        return $this;
    }

    public function getMembre(): ?concours
    {
        return $this->membre;
    }

    public function setMembre(?concours $membre): self
    {
        $this->membre = $membre;

        return $this;
    }
}
