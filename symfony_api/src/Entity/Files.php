<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FilesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FilesRepository::class)]
#[ApiResource()]
class Files
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $extension = null;

    #[ORM\Column(length: 255)]
    private ?string $path = null;

    #[ORM\ManyToOne(inversedBy: 'files')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Members $created_by = null;

    #[ORM\OneToOne(inversedBy: 'files', cascade: ['persist', 'remove'])]
    private ?Pictures $pictures = null;

    #[ORM\ManyToOne(inversedBy: 'files')]
    private ?Contests $contests = null;

    #[ORM\OneToOne(inversedBy: 'files', cascade: ['persist', 'remove'])]
    private ?Organizations $organizations = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getExtension(): ?string
    {
        return $this->extension;
    }

    public function setExtension(string $extension): self
    {
        $this->extension = $extension;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getCreatedBy(): ?Members
    {
        return $this->created_by;
    }

    public function setCreatedBy(?Members $created_by): self
    {
        $this->created_by = $created_by;

        return $this;
    }

    public function getPictures(): ?Pictures
    {
        return $this->pictures;
    }

    public function setPictures(?Pictures $pictures): self
    {
        $this->pictures = $pictures;

        return $this;
    }

    public function getContests(): ?Contests
    {
        return $this->contests;
    }

    public function setContests(?Contests $contests): self
    {
        $this->contests = $contests;

        return $this;
    }

    public function getOrganizations(): ?Organizations
    {
        return $this->organizations;
    }

    public function setOrganizations(?Organizations $organizations): self
    {
        $this->organizations = $organizations;

        return $this;
    }
}
