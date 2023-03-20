<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\MembreConcoursRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MembreConcoursRepository::class)]
#[ApiResource]
class MembreConcours
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_invitation = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_validate = null;

    #[ORM\ManyToOne(inversedBy: 'membreConcours')]
    #[ORM\JoinColumn(nullable: false)]
    private ?concours $Concours = null;

    #[ORM\ManyToOne(inversedBy: 'membreConcours')]
    #[ORM\JoinColumn(nullable: false)]
    private ?membre $membre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fonction = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateInvitation(): ?\DateTimeInterface
    {
        return $this->date_invitation;
    }

    public function setDateInvitation(\DateTimeInterface $date_invitation): self
    {
        $this->date_invitation = $date_invitation;

        return $this;
    }

    public function getDateValidate(): ?\DateTimeInterface
    {
        return $this->date_validate;
    }

    public function setDateValidate(\DateTimeInterface $date_validate): self
    {
        $this->date_validate = $date_validate;

        return $this;
    }

    public function getConcours(): ?concours
    {
        return $this->Concours;
    }

    public function setConcours(?concours $Concours): self
    {
        $this->Concours = $Concours;

        return $this;
    }

    public function getMembre(): ?membre
    {
        return $this->membre;
    }

    public function setMembre(?membre $membre): self
    {
        $this->membre = $membre;

        return $this;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(?string $fonction): self
    {
        $this->fonction = $fonction;

        return $this;
    }
}
